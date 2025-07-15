import React, { useEffect } from 'react';
import { X, AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';
import Button from './Button';

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'default' | 'danger' | 'success';
}

interface AlertModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  message?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

interface LoadingModalProps {
  isOpen?: boolean;
  message?: string;
}

interface PostFormData {
  title: string;
  location: string;
  content: string;
  category: string;
}

interface PostFormModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: (data: PostFormData) => void;
  initialData?: Partial<PostFormData>;
}

interface ImageData {
  src: string;
  alt: string;
}

interface ImageGalleryModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  images?: ImageData[];
  currentIndex?: number;
}

// 기본 모달 컴포넌트
const Modal: React.FC<ModalProps> = ({ 
  isOpen = false, 
  onClose = () => {}, 
  title, 
  children, 
  size = 'md',
  closeOnOverlayClick = true,
  showCloseButton = true,
  className = ''
}) => {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes: Record<string, string> = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-7xl'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        className={`bg-white rounded-xl ${sizes[size]} w-full max-h-[90vh] overflow-y-auto ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {showCloseButton && (
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            )}
          </div>
        )}
        
        {/* 콘텐츠 */}
        <div className="p-6">
          {children}
        </div>
      </div>
      
      {/* 오버레이 클릭으로 닫기 */}
      {closeOnOverlayClick && (
        <div 
          className="absolute inset-0 -z-10" 
          onClick={onClose}
        />
      )}
    </div>
  );
};

// 확인 모달
const ConfirmModal: React.FC<ConfirmModalProps> = ({ 
  isOpen = false, 
  onClose = () => {}, 
  onConfirm = () => {}, 
  title = '확인', 
  message = '',
  confirmText = '확인',
  cancelText = '취소',
  variant = 'default'
}) => {
  const variants = {
    default: {
      icon: Info,
      iconColor: 'text-blue-600',
      confirmButton: 'primary' as const
    },
    danger: {
      icon: AlertTriangle,
      iconColor: 'text-red-600',
      confirmButton: 'danger' as const
    },
    success: {
      icon: CheckCircle,
      iconColor: 'text-green-600',
      confirmButton: 'primary' as const
    }
  };

  const config = variants[variant];
  const Icon = config.icon;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      size="sm"
      closeOnOverlayClick={false}
      showCloseButton={false}
    >
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
          <Icon className={`h-6 w-6 ${config.iconColor}`} />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-6">{message}</p>
        <div className="flex space-x-3 justify-center">
          <Button variant="ghost" onClick={onClose}>
            {cancelText}
          </Button>
          <Button 
            variant={config.confirmButton} 
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

// 알림 모달
const AlertModal: React.FC<AlertModalProps> = ({ 
  isOpen = false, 
  onClose = () => {}, 
  title, 
  message,
  type = 'info'
}) => {
  const types = {
    info: {
      icon: Info,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    success: {
      icon: CheckCircle,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    warning: {
      icon: AlertTriangle,
      iconColor: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    error: {
      icon: XCircle,
      iconColor: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  };

  const config = types[type];
  const Icon = config.icon;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      size="sm"
      showCloseButton={false}
    >
      <div className="text-center">
        <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${config.bgColor} mb-4`}>
          <Icon className={`h-6 w-6 ${config.iconColor}`} />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-6">{message}</p>
        <Button onClick={onClose}>확인</Button>
      </div>
    </Modal>
  );
};

// 로딩 모달
const LoadingModal: React.FC<LoadingModalProps> = ({ 
  isOpen = false, 
  message = '처리중입니다...'
}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      size="sm"
      closeOnOverlayClick={false}
      showCloseButton={false}
    >
      <div className="text-center py-4">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </Modal>
  );
};

// 폼 모달 (여행록 작성용)
const PostFormModal: React.FC<PostFormModalProps> = ({ 
  isOpen = false, 
  onClose = () => {}, 
  onSubmit = () => {},
  initialData = {}
}) => {
  const [formData, setFormData] = React.useState<PostFormData>({
    title: '',
    location: '',
    content: '',
    category: '',
    ...initialData
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleChange = (field: keyof PostFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      title="새 여행록 작성"
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="여행록 제목을 입력하세요"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">위치</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="여행 위치"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">카테고리</label>
            <select
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">선택하세요</option>
              <option value="domestic">국내여행</option>
              <option value="international">해외여행</option>
              <option value="solo">혼자여행</option>
              <option value="group">단체여행</option>
              <option value="family">가족여행</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
          <textarea
            value={formData.content}
            onChange={(e) => handleChange('content', e.target.value)}
            placeholder="여행 경험을 공유해주세요..."
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            required
          />
        </div>
        
        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="ghost" type="button" onClick={onClose}>
            취소
          </Button>
          <Button type="submit">
            게시
          </Button>
        </div>
      </form>
    </Modal>
  );
};

// 이미지 갤러리 모달
const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ 
  isOpen = false, 
  onClose = () => {}, 
  images = [],
  currentIndex = 0
}) => {
  const [activeIndex, setActiveIndex] = React.useState(currentIndex);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="full"
      className="bg-black"
    >
      <div className="relative h-full flex items-center justify-center">
        {images.length > 0 && (
          <>
            <img 
              src={images[activeIndex]?.src} 
              alt={images[activeIndex]?.alt}
              className="max-h-full max-w-full object-contain"
            />
            
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                >
                  →
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                  {activeIndex + 1} / {images.length}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </Modal>
  );
};

export { 
  Modal, 
  ConfirmModal, 
  AlertModal, 
  LoadingModal, 
  PostFormModal, 
  ImageGalleryModal 
};

export type {
  ModalProps,
  ConfirmModalProps,
  AlertModalProps,
  LoadingModalProps,
  PostFormModalProps,
  PostFormData,
  ImageGalleryModalProps,
  ImageData
};

export default Modal;