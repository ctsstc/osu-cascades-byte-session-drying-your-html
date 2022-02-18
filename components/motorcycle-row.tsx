import Image from 'next/image';
import { Motorcycle } from '../data/data';

type Props = {
  manufacturer: string;
  motorcycle: Motorcycle;
};

const MotorcycleRow = ({ manufacturer, motorcycle }: Props) => {
  return (
    <tr>
      {/* <td>
        <Image
          src={motorcycle.imagePath}
          width={40}
          height={40}
          alt="Motorcycle Image"
        />
      </td> */}
      <td>{motorcycle.year}</td>
      <td>{manufacturer}</td>
      <td>{motorcycle.model}</td>
      <td>{motorcycle.category}</td>
      <td>
        {motorcycle.cc}cc, {motorcycle.hp}hp
      </td>
    </tr>
  );
};

export default MotorcycleRow;
