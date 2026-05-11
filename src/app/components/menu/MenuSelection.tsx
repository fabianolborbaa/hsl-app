import type { ReactNode } from 'react';
import { ArrowLeft, Coffee, Salad } from 'lucide-react';
import { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

interface MenuSelectionProps {
  onBack: () => void;
  onConfirm: () => void;
  overlay?: ReactNode;
  transitionDirection?: 'forward' | 'back';
}

export default function MenuSelection({ onBack, onConfirm, overlay, transitionDirection = 'forward' }: MenuSelectionProps) {
  const [selectedSoup, setSelectedSoup] = useState('creme-palmito');
  const [selectedDessert, setSelectedDessert] = useState('salada-grega');

  return (
    <div className="menu-canvas">
      <div className="menu-mobile-frame bg-white overflow-hidden relative">
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="bg-[var(--hsl-menu-color-brand)] px-4 pb-4 h-36 flex items-end">
            <div className="flex items-end justify-between w-full">
              <div className="flex items-end gap-3 flex-1">
                <button onClick={onBack} className="p-1 -ml-1 active:opacity-70 mb-0.5">
                  <ArrowLeft size={24} className="menu-header-icon" />
                </button>
                <div>
                  <h1 className="menu-header-title">Edição de cardápio</h1>
                  <p className="menu-header-caption">Conta: Particular</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="menu-avatar-text">NL</span>
              </div>
            </div>
          </div>

          <div className={`menu-content-transition menu-content-${transitionDirection} flex flex-col flex-1 min-h-0`}>
          {/* Content */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">

            {/* Subtitle */}
            <p className="menu-caption-muted">
              Sugestão do chef | Jantar de amanhã
            </p>

            {/* Meal Title */}
            <div>
              <h2 className="menu-title mb-2">
                Filé de Tilápia Grelhado com sal
              </h2>
              <p className="menu-body">
                Creme de palmito com sal, salada grega, arroz e salada de frutas.
              </p>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* Customize Section */}
            <div>
              <p className="menu-body mb-4">
                Personalize sua refeição, alterando os itens abaixo.
              </p>

              {/* Soup Selection */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 menu-icon" />
                  <p className="menu-section-title">Sopa</p>
                </div>

                <RadioGroup.Root value={selectedSoup} onValueChange={setSelectedSoup} className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <label className="menu-label flex-1">Creme de palmito sem sal</label>
                    <RadioGroup.Item
                      value="creme-palmito"
                      className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white data-[state=checked]:border-[var(--hsl-menu-color-brand)] data-[state=checked]:bg-white"
                    >
                      <RadioGroup.Indicator>
                        <div className="w-3 h-3 bg-[var(--hsl-menu-color-brand)] rounded-full" />
                      </RadioGroup.Indicator>
                    </RadioGroup.Item>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <label className="menu-label flex-1">Canja sem sal</label>
                    <RadioGroup.Item
                      value="canja"
                      className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white data-[state=checked]:border-[var(--hsl-menu-color-brand)] data-[state=checked]:bg-white"
                    >
                      <RadioGroup.Indicator>
                        <div className="w-3 h-3 bg-[var(--hsl-menu-color-brand)] rounded-full" />
                      </RadioGroup.Indicator>
                    </RadioGroup.Item>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <label className="menu-label flex-1">Não quero receber</label>
                    <RadioGroup.Item
                      value="nao-receber"
                      className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white data-[state=checked]:border-[var(--hsl-menu-color-brand)] data-[state=checked]:bg-white"
                    >
                      <RadioGroup.Indicator>
                        <div className="w-3 h-3 bg-[var(--hsl-menu-color-brand)] rounded-full" />
                      </RadioGroup.Indicator>
                    </RadioGroup.Item>
                  </div>
                </RadioGroup.Root>
              </div>

              {/* Salad Selection */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Salad className="w-5 h-5 menu-icon" />
                  <p className="menu-section-title">Salada</p>
                </div>

                <RadioGroup.Root value={selectedDessert} onValueChange={setSelectedDessert} className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <label className="menu-label flex-1">Salada grega</label>
                    <RadioGroup.Item
                      value="salada-grega"
                      className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white data-[state=checked]:border-[var(--hsl-menu-color-brand)] data-[state=checked]:bg-white"
                    >
                      <RadioGroup.Indicator>
                        <div className="w-3 h-3 bg-[var(--hsl-menu-color-brand)] rounded-full" />
                      </RadioGroup.Indicator>
                    </RadioGroup.Item>
                  </div>
                </RadioGroup.Root>
              </div>
            </div>

          </div>

          {/* Fixed CTA */}
          <div className="menu-cta-footer border-t border-gray-200">
            <button
              onClick={onConfirm}
              className="w-full menu-primary-button py-3 px-5 rounded-full transition"
            >
              Salvar jantar de amanhã
            </button>
          </div>
          </div>
        </div>
        {overlay}
      </div>
    </div>
  );
}
