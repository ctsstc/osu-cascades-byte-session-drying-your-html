import MotorcycleRow from '../components/motorcycle-row';
import Page from '../components/page';
import { Manufacturer, manufacturers, Motorcycle } from '../data/data';

const BikePage = () => {
  return (
    <Page>
      <h1>Bikes</h1>
      <p>Here is our new page component</p>

      <table>
        {Object.values(manufacturers.Honda)[0].map(
          (motorcycle: Motorcycle, i: number) => (
            <MotorcycleRow
              key={i}
              manufacturer="Honda"
              motorcycle={motorcycle}
            />
          )
        )}
      </table>

      <pre>
        {JSON.stringify(Object.values(manufacturers.Honda)[0], null, 2)}
      </pre>
    </Page>
  );
};

export default BikePage;
