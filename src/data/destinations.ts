import type { DestinationItem } from '@/types'

import destinationImage1 from '@/assets/images/destination-image-1.webp'
import destinationImage2 from '@/assets/images/destination-image-2.webp'
import destinationImage3 from '@/assets/images/destination-image-3.webp'
import destinationImage4 from '@/assets/images/destination-image-4.webp'

export const topDestinationItems: DestinationItem[] = [
  { 
    id: '1', 
    title: 'Itália',
    options: '15+ destinos',
    image: destinationImage1,
  },
  { 
    id: '2', 
    title: 'Japão',
    options: '18+ destinos',
    image: destinationImage2,
  },
  { 
    id: '3', 
    title: 'França',
    options: '12+ destinos',
    image: destinationImage3,
  },
  { 
    id: '4', 
    title: 'Indonésia',
    options: '15+ destinos',
    image: destinationImage4,
  },
]