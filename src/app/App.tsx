import { useState } from 'react';
import {
  Search,
  Download,
  Info,
  MoreVertical,
  Settings,
  Fingerprint,
  Mic,
  Edit,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Grid3x3,
  X,
  User,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Home,
} from 'lucide-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Tabs from '@radix-ui/react-tabs';
import * as Accordion from '@radix-ui/react-accordion';
import * as Switch from '@radix-ui/react-switch';
import * as Progress from '@radix-ui/react-progress';
import { toast, Toaster } from 'sonner';
import ExamCards from './components/ExamCards';
import MenuScreen from './components/MenuScreen';
import AppointmentSummary from './components/AppointmentSummary';

type AppPage = 'components' | 'exam-cards' | 'menu' | 'appointment';

interface AppProps {
  standalonePage?: AppPage;
}

const Eyebrow = ({ children }: { children: string }) => (
  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{children}</p>
);

export default function App({ standalonePage }: AppProps) {
  const [activeTab, setActiveTab] = useState('tab-2');
  const [selectedItem, setSelectedItem] = useState('Label 03');
  const [selectedDate, setSelectedDate] = useState(8);
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);
  const [switchEnabled, setSwitchEnabled] = useState(true);
  const [progress, setProgress] = useState(66);
  const [currentPage, setCurrentPage] = useState<AppPage>(standalonePage ?? 'components');

  return (
    <div className="min-h-screen bg-white p-12">
      <Toaster position="top-right" />

      <div className="max-w-[1600px] mx-auto">
        {/* Page Navigation */}
        {!standalonePage && <div className="mb-8 flex gap-4">
          <button
            onClick={() => setCurrentPage('components')}
            className={`px-5 py-2 rounded-full font-medium transition text-sm ${
              currentPage === 'components'
                ? 'bg-[#286EF1] text-white'
                : 'border border-[#286EF1] text-[#286EF1] hover:bg-[#286EF1]/5'
            }`}
          >
            Components Library
          </button>
          <button
            onClick={() => setCurrentPage('exam-cards')}
            className={`px-5 py-2 rounded-full font-medium transition text-sm ${
              currentPage === 'exam-cards'
                ? 'bg-[#286EF1] text-white'
                : 'border border-[#286EF1] text-[#286EF1] hover:bg-[#286EF1]/5'
            }`}
          >
            Exam Cards
          </button>
          <button
            onClick={() => setCurrentPage('menu')}
            className={`px-5 py-2 rounded-full font-medium transition text-sm ${
              currentPage === 'menu'
                ? 'bg-[#286EF1] text-white'
                : 'border border-[#286EF1] text-[#286EF1] hover:bg-[#286EF1]/5'
            }`}
          >
            Menu Screen
          </button>
          <button
            onClick={() => setCurrentPage('appointment')}
            className={`px-5 py-2 rounded-full font-medium transition text-sm ${
              currentPage === 'appointment'
                ? 'bg-[#286EF1] text-white'
                : 'border border-[#286EF1] text-[#286EF1] hover:bg-[#286EF1]/5'
            }`}
          >
            Appointment Summary
          </button>
        </div>}

        {/* Page Content */}
        {currentPage === 'exam-cards' && <ExamCards />}
        {currentPage === 'menu' && <MenuScreen />}
        {currentPage === 'appointment' && <AppointmentSummary />}
        {currentPage === 'components' && (
        <>
        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-16">

          {/* LEFT COLUMN */}
          <div className="space-y-12">
            {/* Typography */}
            <div>
              <Eyebrow>Typography</Eyebrow>
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight">Heading Display</h1>
                <h2 className="text-3xl font-bold">Heading Large</h2>
                <h3 className="text-xl font-semibold">Heading Medium</h3>
                <h4 className="text-base font-semibold">Heading Small</h4>
              </div>
            </div>

            {/* Checkboxes */}
            <div>
              <Eyebrow>Checkbox</Eyebrow>
              <div className="space-y-3">
                <div className="flex items-center gap-12">
                  <div className="flex items-center gap-2">
                    <Checkbox.Root
                      className="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center bg-white"
                      id="default1"
                    >
                      <Checkbox.Indicator>
                        <div className="w-2 h-2 bg-gray-800" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label htmlFor="default1" className="text-sm text-gray-700 cursor-pointer">Default</label>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox.Root
                      className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center bg-white"
                      id="default2"
                    >
                      <Checkbox.Indicator>
                        <div className="w-2 h-2 bg-gray-800 rounded-full" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label htmlFor="default2" className="text-sm text-gray-700 cursor-pointer">Default</label>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <div className="flex items-center gap-2">
                    <Checkbox.Root
                      className="w-4 h-4 border-2 border-red-500 rounded flex items-center justify-center bg-white"
                      id="archived1"
                      defaultChecked
                    >
                      <Checkbox.Indicator>
                        <div className="w-2 h-2 bg-red-500" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label htmlFor="archived1" className="text-sm text-red-500 cursor-pointer">Archived</label>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox.Root
                      className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center bg-white"
                      id="archived2"
                      defaultChecked
                    >
                      <Checkbox.Indicator>
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label htmlFor="archived2" className="text-sm text-red-500 cursor-pointer">Archived</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <Eyebrow>Tag</Eyebrow>
              <div className="flex gap-2">
                <span className="px-4 py-1 border border-[#286EF1] text-[#286EF1] rounded text-sm font-medium">
                  Tag Label
                </span>
                <span className="px-4 py-1 bg-[#286EF1] text-white rounded text-sm font-medium">
                  Tag Label
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div>
              <Eyebrow>Button</Eyebrow>
              <div className="flex gap-2">
                <button className="px-5 py-2 border border-[#286EF1] text-[#286EF1] rounded-full text-sm font-medium hover:bg-[#286EF1]/5 transition">
                  Button Secondary
                </button>
                <button className="px-5 py-2 bg-[#286EF1] text-white rounded-full text-sm font-medium hover:bg-[#1e5cd4] transition">
                  Button Primary
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <Eyebrow>Tabs</Eyebrow>
              <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
                <Tabs.List className="flex gap-8 border-b border-gray-300">
                  <Tabs.Trigger
                    value="tab-1"
                    className="pb-2.5 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-[#286EF1] data-[state=active]:text-[#286EF1] transition -mb-[2px]"
                  >
                    Tab Label
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="tab-2"
                    className="pb-2.5 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-[#286EF1] data-[state=active]:text-[#286EF1] transition -mb-[2px]"
                  >
                    Tab Label
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="tab-3"
                    className="pb-2.5 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-[#286EF1] data-[state=active]:text-[#286EF1] transition -mb-[2px]"
                  >
                    Tab Label
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="tab-4"
                    className="pb-2.5 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-[#286EF1] data-[state=active]:text-[#286EF1] transition -mb-[2px]"
                  >
                    Tab Label
                  </Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>
            </div>

            {/* Badge */}
            <div>
              <Eyebrow>Badge</Eyebrow>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                  Default
                </span>
                <span className="px-2.5 py-0.5 bg-[#EBF2FE] text-[#286EF1] rounded-full text-xs font-medium">
                  Primary
                </span>
                <span className="px-2.5 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  Success
                </span>
                <span className="px-2.5 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                  Error
                </span>
              </div>
            </div>

            {/* Switch */}
            <div>
              <Eyebrow>Switch</Eyebrow>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Switch.Root
                    checked={switchEnabled}
                    onCheckedChange={setSwitchEnabled}
                    className="w-11 h-6 bg-gray-300 rounded-full relative data-[state=checked]:bg-[#286EF1] transition"
                  >
                    <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform translate-x-0.5 data-[state=checked]:translate-x-[22px]" />
                  </Switch.Root>
                  <label className="text-sm text-gray-700">Enabled</label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch.Root
                    checked={false}
                    className="w-11 h-6 bg-gray-300 rounded-full relative opacity-50 cursor-not-allowed"
                  >
                    <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform translate-x-0.5" />
                  </Switch.Root>
                  <label className="text-sm text-gray-400">Disabled</label>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div>
              <Eyebrow>Progress Bar</Eyebrow>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress.Root className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <Progress.Indicator
                      className="h-full bg-[#286EF1] transition-transform"
                      style={{ transform: `translateX(-${100 - progress}%)` }}
                    />
                  </Progress.Root>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Loading</span>
                    <span>33%</span>
                  </div>
                  <Progress.Root className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <Progress.Indicator
                      className="h-full bg-green-600 transition-transform"
                      style={{ transform: `translateX(-67%)` }}
                    />
                  </Progress.Root>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="space-y-12">
            {/* Avatars */}
            <div>
              <Eyebrow>Avatar</Eyebrow>
              <div className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                  alt="Avatar 1"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                  alt="Avatar 2"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
                  alt="Avatar 3"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Input */}
            <div>
              <Eyebrow>Input</Eyebrow>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700 block">Label</label>
                  <input
                    type="text"
                    placeholder="Input Default"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EBF2FE]0 focus:border-transparent"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-red-500 block">Label</label>
                  <div className="relative">
                    <input
                      type="password"
                      value="•••••"
                      readOnly
                      className="w-full px-3 py-2 pr-10 border border-red-300 bg-red-50 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button className="absolute right-2.5 top-1/2 -translate-y-1/2 text-red-400 hover:text-red-600">
                      <Edit size={14} />
                    </button>
                  </div>
                  <p className="text-xs text-red-500">Helper text</p>
                </div>
              </div>
            </div>

            {/* Dropdown Menu */}
            <div>
              <Eyebrow>Dropdown Menu</Eyebrow>
              <div className="relative pt-10">
                <button className="absolute top-0 right-0 w-8 h-8 bg-[#EBF2FE] hover:bg-blue-200 rounded-full flex items-center justify-center transition">
                  <X size={14} className="text-[#286EF1]" />
                </button>
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                  {['Label 01', 'Label 02', 'Label 03', 'Label 04'].map((item) => (
                    <div
                      key={item}
                      onClick={() => setSelectedItem(item)}
                      className={`px-3 py-2.5 text-sm cursor-pointer flex items-center gap-2.5 transition ${
                        selectedItem === item
                          ? 'bg-[#EBF2FE] text-[#286EF1]'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <Grid3x3 size={14} className="text-gray-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Date Picker */}
            <div>
              <Eyebrow>Date Picker</Eyebrow>
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <button className="p-1 hover:bg-gray-100 rounded transition">
                    <ChevronLeft size={20} className="text-[#286EF1]" />
                  </button>
                  <h3 className="text-base font-semibold text-gray-900">Dezembro de 2021</h3>
                  <button className="p-1 hover:bg-gray-100 rounded transition">
                    <ChevronRight size={20} className="text-[#286EF1]" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-xs font-semibold text-gray-700 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {[29, 30, 31].map((day) => (
                    <button
                      key={`prev-${day}`}
                      className="text-center py-2 text-sm text-gray-300 hover:bg-gray-50 rounded transition"
                    >
                      {day}
                    </button>
                  ))}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      onMouseEnter={() => setHoveredDate(day)}
                      onMouseLeave={() => setHoveredDate(null)}
                      className={`text-center py-2 text-sm rounded transition ${
                        day === 8
                          ? 'bg-[#286EF1] text-white font-semibold'
                          : day === 4
                          ? 'bg-blue-200 text-[#286EF1] font-semibold'
                          : 'text-[#286EF1] hover:bg-[#EBF2FE]'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                  {[1, 2].map((day) => (
                    <button
                      key={`next-${day}`}
                      className="text-center py-2 text-sm text-gray-300 hover:bg-gray-50 rounded transition"
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Breadcrumb */}
            <div>
              <Eyebrow>Breadcrumb</Eyebrow>
              <nav className="flex items-center gap-2 text-sm">
                <a href="#" className="text-gray-500 hover:text-gray-700 transition flex items-center gap-2">
                  <Home size={14} />
                  Home
                </a>
                <span className="text-gray-400">/</span>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition">
                  Category
                </a>
                <span className="text-gray-400">/</span>
                <span className="text-gray-900 font-medium">Current Page</span>
              </nav>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-12">
            {/* Icons */}
            <div>
              <Eyebrow>Icons</Eyebrow>
              <div className="grid grid-cols-4 gap-4">
                <Search className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
                <Download className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
                <Info className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
                <MoreVertical className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
                <Download className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
                <Settings className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
                <Fingerprint className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
                <Mic className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
              </div>
            </div>

            {/* Toast */}
            <div>
              <Eyebrow>Toast</Eyebrow>
              <div className="max-w-[320px] space-y-3">
                <button
                  onClick={() => {
                    toast.success('Mensagem de sucesso', {
                      description: 'Parece que alguma coisa deu muito certo!',
                    });
                  }}
                  className="w-full px-3 py-2.5 bg-green-100 border border-green-300 rounded text-left hover:bg-green-150 transition"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-green-900">Mensagem de sucesso</p>
                      <p className="text-xs text-green-700">Parece que alguma coisa deu muito ce...</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    toast.error('Mensagem de erro', {
                      description: 'Parece que alguma coisa deu muito errado!',
                    });
                  }}
                  className="w-full px-3 py-2.5 bg-red-100 border border-red-300 rounded text-left hover:bg-red-150 transition"
                >
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-red-900">Mensagem de erro</p>
                      <p className="text-xs text-red-700">Parece que alguma coisa deu muito er...</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Accordion */}
            <div>
              <Eyebrow>Accordion</Eyebrow>
              <div className="max-w-[320px]">
                <Accordion.Root type="single" collapsible>
                  <Accordion.Item value="item-1" className="border border-gray-300 rounded overflow-hidden bg-white">
                    <Accordion.Header>
                      <Accordion.Trigger className="w-full px-3 py-2 text-left font-medium text-sm hover:bg-gray-50 flex items-center justify-between group">
                        <span className="text-gray-900">Accordion</span>
                        <ChevronDown className="w-4 h-4 text-gray-600 transition-transform group-data-[state=open]:rotate-180" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="px-3 pb-2.5 text-xs text-gray-600 leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                      Lorem ipsum is simply dummy text of the typesetting industry. Lorem ipsum has been industry's standard dummy text ever since.
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </div>
            </div>

            {/* User Menu */}
            <div>
              <Eyebrow>User Menu</Eyebrow>
              <div className="space-y-3">
                <div className="flex items-center gap-4 px-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold text-sm">
                    DM
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-[#286EF1] leading-tight">Olá, nome da pessoa usuária</p>
                      <ChevronDown size={16} className="text-[#286EF1] rotate-180" />
                    </div>
                    <p className="text-xs text-gray-500 leading-tight mt-1">Tipo de conta</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                  <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 border-b border-gray-100">
                    <User size={18} className="text-gray-700" />
                    <span className="text-sm text-gray-800">Meus dados</span>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 border-b border-gray-100">
                    <Settings size={18} className="text-gray-700" />
                    <span className="text-sm text-gray-800">Configurações</span>
                  </div>
                  <div className="px-4 py-3 bg-[#EBF2FE] cursor-pointer flex items-center gap-3 border-b border-gray-100">
                    <HelpCircle size={18} className="text-[#286EF1]" />
                    <span className="text-sm text-[#286EF1] font-medium">Ajuda e suporte</span>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3">
                    <LogOut size={18} className="text-gray-700" />
                    <span className="text-sm text-gray-800">Sair da minha conta</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Loading Spinner */}
            <div>
              <Eyebrow>Loading Spinner</Eyebrow>
              <div className="flex items-center gap-6">
                <Loader2 className="w-6 h-6 text-[#286EF1] animate-spin" />
                <Loader2 className="w-8 h-8 text-[#286EF1] animate-spin" />
                <Loader2 className="w-10 h-10 text-[#286EF1] animate-spin" />
              </div>
            </div>
          </div>

        </div>
        </>
        )}
      </div>
    </div>
  );
}
