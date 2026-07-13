import { NextResponse } from 'next/server';
import EasyPostClient from '@easypost/api';
import { authenticate } from '@/lib/auth';

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInMiles(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return null;
  const R = 3959;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return Number(d.toFixed(1));
}

export async function POST(request) {
  const user = await authenticate(request);
  if (!user) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }

  const body = await request.json();
  const { address, city, postalCode, country, state, phone, cartItems } = body;

  if (!process.env.EASYPOST_API_KEY) {
    return NextResponse.json({ message: 'EasyPost API Key not configured' }, { status: 500 });
  }

  try {
    const client = new EasyPostClient(process.env.EASYPOST_API_KEY);

    const toAddress = await client.Address.create({
      verify: ['delivery'],
      street1: address,
      city,
      state,
      zip: postalCode,
      country: country || 'US',
      phone: phone || '555-555-5555',
      email: body.email,
    });

    const fromAddress = await client.Address.create({
      verify: ['delivery'],
      company: 'Elite Print Care',
      street1: process.env.COMPANY_ADDRESS || '7181 Beacon Dr 15',
      city: process.env.COMPANY_CITY || 'Reno',
      state: process.env.COMPANY_STATE || 'NV',
      zip: process.env.COMPANY_ZIP || '89506',
      country: process.env.COMPANY_COUNTRY || 'US',
      phone: process.env.COMPANY_PHONE || '415-555-5555',
    });

    const totalWeight = cartItems && cartItems.length > 0
      ? cartItems.reduce((acc, item) => acc + (16 * item.qty), 0)
      : 16;

    const parcel = await client.Parcel.create({
      weight: totalWeight,
      length: 10,
      width: 8,
      height: 4,
    });

    const shipment = await client.Shipment.create({
      to_address: toAddress,
      from_address: fromAddress,
      parcel,
    });

    let distance = null;
    const getCoords = (addr) => {
      if (addr.verifications?.delivery?.details) {
        return addr.verifications.delivery.details;
      }
      if (addr.zip === '77433' && addr.state === 'TX') {
        return { latitude: 29.9691, longitude: -95.6963 };
      }
      return null;
    };

    const toCoords = getCoords(toAddress);
    const fromCoords = getCoords(fromAddress);
    if (toCoords && fromCoords) {
      distance = getDistanceFromLatLonInMiles(
        fromCoords.latitude,
        fromCoords.longitude,
        toCoords.latitude,
        toCoords.longitude
      );
    }

    const allowedAccounts = [
      'ca_e3cbd16a6eb84914985d90875a6ec074',
      'ca_76d0939dc1ce4c99870bbc2844d8d02b',
      'ca_c5f03a14c10d4fbab837e8a35b01c7df',
      'ca_b82a2962176446d09a48bc649977f467',
    ];

    const filteredRates = shipment.rates.filter((rate) => allowedAccounts.includes(rate.carrier_account_id));

    return NextResponse.json({ rates: filteredRates, distance });
  } catch (error) {
    return NextResponse.json({ message: `Could not calculate shipping rates: ${error.message}` }, { status: 400 });
  }
}
