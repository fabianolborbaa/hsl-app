import { ArrowLeft, Coffee, Salad } from 'lucide-react';
import { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

interface MenuSelectionProps {
  onBack: () => void;
  onConfirm: () => void;
}

export default function MenuSelection({ onBack, onConfirm }: MenuSelectionProps) {
  const [selectedSoup, setSelectedSoup] = useState('creme-palmito');
  const [selectedDessert, setSelectedDessert] = useState('salada-grega');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] bg-white rounded-3xl shadow-xl overflow-hidden min-h-[812px]">
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="bg-[#286EF1] px-4 pb-4 h-36 flex items-end">
            <div className="flex items-end justify-between w-full">
              <div className="flex items-end gap-3 flex-1">
                <button onClick={onBack} className="p-1 -ml-1 active:opacity-70 mb-0.5">
                  <ArrowLeft size={24} className="text-white" />
                </button>
                <div>
                  <h1 className="text-white text-sm font-semibold">Edição de cardápio</h1>
                  <p className="text-white/90 text-xs">Conta: Particular</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#286EF1] text-xs font-bold">NL</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">

            {/* Subtitle */}
            <p className="text-xs text-gray-500">
              Sugestão do chef | Jantar de amanhã
            </p>

            {/* Meal Title */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Filé de Tilápia Grelhado com sal
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Creme de palmito com sal, salada grega, arroz e salada de frutas.
              </p>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* Customize Section */}
            <div>
              <p className="text-sm text-gray-700 mb-4">
                Personalize sua refeição, alterando os itens abaixo.
              </p>

              {/* Soup Selection */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-gray-700" />
                  <p className="text-base font-semibold text-gray-900">Sopa</p>
                </div>

                <RadioGroup.Root value={selectedSoup} onValueChange={setSelectedSoup} className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <label className="text-sm text-gray-900 flex-1">Creme de palmito sem sal</label>
                    <RadioGroup.Item
                      value="creme-palmito"
                      className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white data-[state=checked]:border-[#286EF1] data-[state=checked]:bg-white"
                    >
                      <RadioGroup.Indicator>
                        <div className="w-3 h-3 bg-[#286EF1] rounded-full" />
                      </RadioGroup.Indicator>
                    </RadioGroup.Item>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <label className="text-sm text-gray-900 flex-1">Canja sem sal</label>
                    <RadioGroup.Item
                      value="canja"
                      className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white data-[state=checked]:border-[#286EF1] data-[state=checked]:bg-white"
                    >
                      <RadioGroup.Indicator>
                        <div className="w-3 h-3 bg-[#286EF1] rounded-full" />
                      </RadioGroup.Indicator>
                    </RadioGroup.Item>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <label className="text-sm text-gray-900 flex-1">Não quero receber</label>
                    <RadioGroup.Item
                      value="nao-receber"
                      className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white data-[state=checked]:border-[#286EF1] data-[state=checked]:bg-white"
                    >
                      <RadioGroup.Indicator>
                        <div className="w-3 h-3 bg-[#286EF1] rounded-full" />
                      </RadioGroup.Indicator>
                    </RadioGroup.Item>
                  </div>
                </RadioGroup.Root>
              </div>

              {/* Salad Selection */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Salad className="w-5 h-5 text-gray-700" />
                  <p className="text-base font-semibold text-gray-900">Salada</p>
                </div>

                <RadioGroup.Root value={selectedDessert} onValueChange={setSelectedDessert} className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <label className="text-sm text-gray-900 flex-1">Salada grega</label>
                    <RadioGroup.Item
                      value="salada-grega"
                      className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white data-[state=checked]:border-[#286EF1] data-[state=checked]:bg-white"
                    >
                      <RadioGroup.Indicator>
                        <div className="w-3 h-3 bg-[#286EF1] rounded-full" />
                      </RadioGroup.Indicator>
                    </RadioGroup.Item>
                  </div>
                </RadioGroup.Root>
              </div>
            </div>

          </div>

          {/* Fixed CTA */}
          <div className="p-4 pt-3 border-t border-gray-200 bg-white">
            <button
              onClick={onConfirm}
              className="w-full bg-[#286EF1] hover:bg-[#1e5cd4] text-white font-medium py-3 px-5 rounded-full transition text-sm"
            >
              Salvar jantar de amanhã
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
