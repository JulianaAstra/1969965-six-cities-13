import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '0c6fdd1a-552a-4fad-b11d-f28607370c73',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 305,
    previewImage: 'https://13.design.pages.academy/static/hotel/16.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.9
  },
  {
    id: '82c35161-90e1-4cfa-82f8-7e048d8eb551',
    title: 'House in countryside',
    type: 'room',
    price: 110,
    previewImage: 'https://13.design.pages.academy/static/hotel/11.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.4
  },
  {
    id: '80cf8ba7-b1c8-4c74-8e37-226dc7f11c78',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 398,
    previewImage: 'https://13.design.pages.academy/static/hotel/1.jpg',
    city: {
      name: 'New York',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9
  },
  {
    id: 'cb531ab2-4920-434b-8178-f51cb418d0d0',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 271,
    previewImage: 'https://13.design.pages.academy/static/hotel/9.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  }
];
