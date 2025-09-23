import {
  Header,
  PortfolioHeader,
  ProductCard,
  ProposalCard,
  ProposalMidSection,
  ProjectTabs,
  PortfolioMasonry,
  PortfolioNav
} from "./components";

export default function Home() {
  return (
    <div>
      <PortfolioHeader />
      <PortfolioNav />
      <PortfolioMasonry />
      {/* <div className="flex flex-wrap ">
        <ProductCard bids />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div> */}
      {/* <ProposalMidSection />
      <ProjectTabs />
      <ProposalCard />
      <ProposalCard /> */}
    </div>
  );
}
