import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useState } from 'react';
import examesHeroImage from '../../assets/exames-hero.png';
import examesImagemImage from '../../assets/exames-imagem.png';
import examesLaudoImage from '../../assets/exames-laudo.png';

type ExamsView = 'list' | 'detail';
type TransitionDirection = 'forward' | 'back';

const exams = [
  {
    id: 'transaminases',
    icon: BiotechOutlinedIcon,
    title: 'Transaminases (ALT e AST) ou TGP e TGO.',
    date: 'Realizado em 10/05',
    status: 'Resultado previsto para 28/05',
    statusTone: 'warning',
  },
  {
    id: 'ultrasound',
    icon: CalendarMonthOutlinedIcon,
    title: 'Ultrassonografia de Mamas (Bilateral)',
    date: 'Realizado em 10/05',
    status: 'Resultado liberado',
    statusTone: 'success',
  },
  {
    id: 'cholesterol',
    icon: BiotechOutlinedIcon,
    title: 'Colesterol Total (CT), Triglicerídeos (TG) e Colestero...',
    date: 'Realizado em 10/05',
    status: 'Resultado liberado',
    statusTone: 'success',
  },
] as const;

const resultDocuments = [
  {
    id: 'report',
    icon: DescriptionOutlinedIcon,
    title: 'Laudo Médico',
    imageSide: 'document',
  },
  {
    id: 'image',
    icon: ImageOutlinedIcon,
    title: 'Imagem',
    imageSide: 'exam',
  },
] as const;

function ExamsHeader() {
  return (
    <div className="bg-[#1749a6] px-4 pb-4 h-[120px] flex items-end">
      <div className="flex items-end justify-between w-full">
        <div className="flex items-end gap-3 flex-1">
          <button className="p-1 -ml-1 active:opacity-70 mb-0.5" type="button">
            <ArrowBackOutlinedIcon className="exam-header-icon menu-header-icon" />
          </button>
          <div>
            <h1 className="menu-header-title">Exames</h1>
            <p className="menu-header-caption">Conta: Particular</p>
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
          <span className="menu-avatar-text">NL</span>
        </div>
      </div>
    </div>
  );
}

function ExamsIllustrationPlaceholder() {
  return (
    <img className="exam-hero-image" src={examesHeroImage} alt="" aria-hidden="true" />
  );
}

function ExamStatus({ tone, children }: { tone: 'success' | 'warning'; children: string }) {
  return (
    <p className={`exam-status exam-status-${tone}`}>
      <span />
      {children}
    </p>
  );
}

function ExamList({ onSelectExam, transitionDirection }: { onSelectExam: () => void; transitionDirection: TransitionDirection }) {
  return (
    <div className={`menu-content-transition menu-content-${transitionDirection} flex-1 overflow-y-auto p-4 space-y-4`}>
      <section className="flex items-center justify-between gap-4 py-2">
        <div className="flex-1">
          <h2 className="menu-title-lg mb-2">Acompanhe os resultados de seus exames</h2>
          <p className="menu-body">Deslize para escolher a data do exame realizado.</p>
        </div>
        <div className="w-32 h-32 flex-shrink-0">
          <ExamsIllustrationPlaceholder />
        </div>
      </section>

      <div className="exam-date-tabs" aria-label="Datas de exames">
        <button className="exam-date-tab exam-date-tab-year" type="button">2022</button>
        <button className="exam-date-tab exam-date-tab-active" type="button">MAI</button>
        <button className="exam-date-tab" type="button">ABR</button>
        <button className="exam-date-tab" type="button">FEV</button>
        <button className="exam-date-tab exam-date-tab-year" type="button">2022</button>
        <button className="exam-date-tab" type="button">DEZ</button>
      </div>

      <section className="exam-list-cards space-y-3">
        {exams.map((exam) => {
          const Icon = exam.icon;
          return (
            <button
              key={exam.id}
              className="menu-action-card exam-card"
              onClick={exam.id === 'ultrasound' ? onSelectExam : undefined}
              type="button"
            >
              <div className="menu-action-card-row items-start">
                <Icon className="exam-material-icon menu-icon flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0 text-left">
                  <h3 className="menu-action-title">{exam.title}</h3>
                  <p className="menu-action-subtitle">{exam.date}</p>
                  <ExamStatus tone={exam.statusTone}>{exam.status}</ExamStatus>
                </div>
                <ChevronRightOutlinedIcon className="exam-chevron-icon menu-brand flex-shrink-0 self-center" />
              </div>
            </button>
          );
        })}
      </section>
    </div>
  );
}

function ResultPreview({ type }: { type: 'document' | 'exam' }) {
  const image = type === 'document' ? examesLaudoImage : examesImagemImage;

  return (
    <div className="exam-result-preview">
      <div className="exam-result-brand">SÍRIO-LIBANÊS</div>
      <img className="exam-result-image" src={image} alt="" aria-hidden="true" />
    </div>
  );
}

function ExamDetail({ onBack, transitionDirection }: { onBack: () => void; transitionDirection: TransitionDirection }) {
  return (
    <div className={`menu-content-transition menu-content-${transitionDirection} flex-1 overflow-y-auto p-4 space-y-4`}>
      <div className="exam-navigation-pill">
        <ChevronLeftOutlinedIcon className="exam-navigation-icon menu-muted-icon" />
        <span>Navegue entre os exames</span>
        <ChevronRightOutlinedIcon className="exam-navigation-icon menu-brand" />
      </div>

      <section className="space-y-3">
        <h2 className="menu-title-sm">Ultrassonografia de Mamas (Bilateral)</h2>
        <ExamStatus tone="success">Resultado liberado</ExamStatus>
        <div className="space-y-0.5 pt-2">
          <p className="menu-caption">
            <span className="menu-caption-strong">Realizado em</span> 23/09/2021 | 16:15
          </p>
          <p className="menu-caption">
            <span className="menu-caption-strong">Unidade</span> Bela Vista
          </p>
          <p className="menu-caption">
            <span className="menu-caption-strong">Solicitado por</span> Dr. Cláudio Alencar Silva de Souza...
          </p>
        </div>
      </section>

      <div className="border-t border-gray-200 pt-4 space-y-3">
        <p className="menu-body-strong">Confira o laudo e as imagens do seu exame:</p>
        <div className="space-y-3">
          {resultDocuments.map((document) => {
            const Icon = document.icon;
            return (
              <article key={document.id} className="exam-result-card">
                <ResultPreview type={document.imageSide} />
                <div className="exam-result-action">
                  <Icon className="exam-result-row-icon menu-icon" />
                  <span className="menu-body-strong flex-1">{document.title}</span>
                  <button className="exam-result-link" type="button">Acessar resultado</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <button className="sr-only" onClick={onBack} type="button">Voltar</button>
    </div>
  );
}

export default function ExamsScreen() {
  const [currentView, setCurrentView] = useState<ExamsView>('list');
  const [transitionDirection, setTransitionDirection] = useState<TransitionDirection>('forward');

  const goToDetail = () => {
    setTransitionDirection('forward');
    setCurrentView('detail');
  };

  const goBack = () => {
    setTransitionDirection('back');
    setCurrentView('list');
  };

  return (
    <div className="menu-canvas hsl-modern">
      <div className="menu-mobile-frame overflow-hidden">
        <div className="flex flex-col h-full">
          <ExamsHeader />
          {currentView === 'list' ? (
            <ExamList onSelectExam={goToDetail} transitionDirection={transitionDirection} />
          ) : (
            <ExamDetail onBack={goBack} transitionDirection={transitionDirection} />
          )}
        </div>
      </div>
    </div>
  );
}
