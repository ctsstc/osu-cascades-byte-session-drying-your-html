import Footer from './footer';
import Header from './header';

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => {
  return (
    <div>
      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Page;
