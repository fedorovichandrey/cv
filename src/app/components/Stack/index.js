import Image from 'next/image';
import { stack } from './constants';
import s from './Stack.module.scss';

const Stack = () => (
  <>
    <h2 className={s.title}>Stack</h2>
    <div className={s.stack}>
      {stack.map(({ value, image }) => (
        <div className={s.block} key={value}>
          <Image
            width={50}
            height={50}
            src={`./stack/${image}`}
            loading="lazy"
            alt={value}
          />
          <span>{value}</span>
        </div>
      ))}
    </div>
  </>
);

export default Stack;
