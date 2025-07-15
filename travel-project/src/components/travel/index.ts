// components/travel/index.ts
export { 
  PostCard, 
  TravelCard, 
  CompanionCard,
  Badge as TravelBadge 
} from './TravelCards';
export type {
  PostCardProps,
  TravelCardProps,
  CompanionCardProps
} from './TravelCards';

// 중복 타입들 제거: PostData, TravelDestination, CompanionData