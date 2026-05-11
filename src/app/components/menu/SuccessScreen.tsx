import { ArrowLeft } from 'lucide-react';
import SuccessIllustration from '../SuccessIllustration';

interface SuccessScreenProps {
  onBack: () => void;
  onGoToMenu: () => void;
  onViewDetails: () => void;
  transitionDirection?: 'forward' | 'back';
}

export default function SuccessScreen({ onBack, onGoToMenu, onViewDetails, transitionDirection = 'forward' }: SuccessScreenProps) {
  return (
    <div className="menu-canvas">
      <div className="menu-mobile-frame bg-white overflow-hidden">
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="bg-[var(--hsl-menu-color-brand)] px-4 pb-4 h-36 flex items-end">
            <div className="flex items-end justify-between w-full">
              <div className="flex items-end gap-3 flex-1">
                <button onClick={onBack} className="p-1 -ml-1 active:opacity-70 mb-0.5">
                  <ArrowLeft size={24} className="menu-header-icon" />
                </button>
                <div>
                  <h1 className="menu-header-title">Alteração confirmada</h1>
                  <p className="menu-header-caption">Conta: Particular</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="menu-avatar-text">BT</span>
              </div>
            </div>
          </div>

          <div className={`menu-content-transition menu-content-${transitionDirection} flex flex-col flex-1 min-h-0`}>
          {/* Content */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            <div className="flex-1 flex flex-col items-center justify-center p-6">

              {/* Illustration */}
              <div className="w-48 h-48 mb-8">
                <SuccessIllustration />
              </div>

              {/* Success Message */}
              <h2 className="menu-title-lg text-center px-4">
                Feito! Seu jantar de amanhã foi alterado com sucesso.
              </h2>
            </div>
          </div>

          {/* Fixed CTAs */}
          <div className="menu-cta-footer border-t border-gray-200 space-y-2">
            <button
              onClick={onGoToMenu}
              className="w-full menu-primary-button py-3 px-5 rounded-full transition"
            >
              Ir para o cardápio
            </button>
            <button
              onClick={onViewDetails}
              className="w-full menu-secondary-button py-3 px-5 rounded-full transition"
            >
              Acessar detalhes da refeição
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
