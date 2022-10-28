import { BlogPanel } from './components/BlogPanel/BlogPanel';
import { Content, Footer, Header, SkillsPanel } from './components/index'
import { PortfolioPanel } from './components/PortfolioPanel/PortfolioPanel';
import { ProductPanel } from './components/ProductPanel/ProductPanel';
import { ProjectsPanel } from './components/ProjectsPanel/ProjectsPanel';
import { ResumePanel } from './components/ResumePanel/ResumePanel';
import { SocialNetworksPanel } from './components/SocialNetworksPanel/SocialNetworksPanel';

function App() {
  return (
    <div className="App">
        <Header />
        <Content>
          <ResumePanel />
          <SkillsPanel />
          <ProjectsPanel />
          <ProductPanel />
          <PortfolioPanel />
          <BlogPanel />
          <SocialNetworksPanel />
        </Content>
        <Footer/>
    </div>
  );
}

export default App;
