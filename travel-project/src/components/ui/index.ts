// components/ui/index.ts
export { default as Button } from './Button';
export type { ButtonProps } from './Button';

export { Input, Textarea, Select } from './Input';
export type { InputProps, TextareaProps, SelectProps } from './Input';

export { Card, Avatar } from './Card';
export type { CardProps, AvatarProps } from './Card';

export { 
  Modal, 
  ConfirmModal, 
  AlertModal, 
  LoadingModal, 
  PostFormModal, 
  ImageGalleryModal 
} from './Modal';
export type {
  ModalProps,
  ConfirmModalProps,
  AlertModalProps,
  LoadingModalProps,
  PostFormModalProps,
  ImageGalleryModalProps
} from './Modal';

export { 
  Table, 
  UserTable, 
  PostTable, 
  CompanionTable, 
  Pagination 
} from './Table';
export type {
  TableProps,
  PaginationProps
} from './Table';

// 중복 타입들 제거: User, Post, Companion, ImageData, PostFormData, SelectOption, TableColumn