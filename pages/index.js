import {Provider} from '@react-spectrum/provider';
import {theme} from '@react-spectrum/theme-default';
import {Button} from '@react-spectrum/button';

export default function Home() {
  return (
    <Provider theme={theme}>
      <Button variant="cta">Button</Button>
    </Provider>
  );
}
