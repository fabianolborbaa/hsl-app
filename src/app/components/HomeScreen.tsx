import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { Loader2 } from 'lucide-react';
import homeHealthcareTeamImage from '../../assets/home-healthcare-team.png';

const shortcuts = [
  {
    id: 'urgent',
    icon: VideocamOutlinedIcon,
    label: 'Pronto atendimento',
  },
  {
    id: 'appointments',
    icon: EventAvailableOutlinedIcon,
    label: 'Agendamento de consultas',
  },
  {
    id: 'documents',
    icon: DescriptionOutlinedIcon,
    label: 'Documentos de consulta',
  },
  {
    id: 'calendar',
    icon: CalendarMonthOutlinedIcon,
    label: 'Meu calendário',
  },
] as const;

const digitalServices = [
  {
    id: 'help',
    icon: ContactSupportOutlinedIcon,
    title: 'Dúvidas? Entre em contato',
  },
  {
    id: 'blog',
    icon: ArticleOutlinedIcon,
    title: 'Acesse o blog Viva Saúde',
  },
  {
    id: 'hospital',
    icon: LocalHospitalOutlinedIcon,
    title: 'Conheça nossas unidades',
  },
] as const;

function HomeHeader() {
  return (
    <div className="home-header">
      <div>
        <h1 className="menu-header-title">Boas-vindas</h1>
        <p className="menu-header-caption">Conta: Saúde Itaú</p>
      </div>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
        <span className="menu-avatar-text">NL</span>
      </div>
    </div>
  );
}

export default function HomeScreen() {
  return (
    <div className="menu-canvas">
      <div className="menu-mobile-frame bg-white overflow-hidden">
        <div className="flex flex-col h-full">
          <HomeHeader />

          <main className="flex-1 overflow-y-auto">
            <section className="home-hero-section">
              <img className="home-hero-image" src={homeHealthcareTeamImage} alt="" aria-hidden="true" />

              <div className="space-y-2">
                <p className="menu-caption">Olá, Bruno.</p>
                <h2 className="menu-title-sm">
                  Aproveite as facilidades disponíveis pelo seu benefício.
                </h2>
              </div>

              <div className="home-loading-card" role="status">
                <Loader2 size={18} className="menu-brand animate-spin" />
                <span>Verificando se há consultas para hoje</span>
              </div>

              <div className="home-shortcuts" aria-label="Atalhos">
                {shortcuts.map((shortcut) => {
                  const Icon = shortcut.icon;
                  return (
                    <button className="home-shortcut" key={shortcut.id} type="button">
                      <span className="home-shortcut-icon">
                        <Icon />
                      </span>
                      <span>{shortcut.label}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="home-services-section">
              <h2 className="menu-section-title">Acesse outros serviços digitais</h2>
              <div className="home-services-grid">
                {digitalServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <button className="home-service-card" key={service.id} type="button">
                      <Icon className="home-service-icon" />
                      <span>{service.title}</span>
                    </button>
                  );
                })}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
