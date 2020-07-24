import {Provider} from '@react-spectrum/provider';
import {theme} from '@react-spectrum/theme-default';
import {Button} from '@react-spectrum/button';

export default function Home() {
  return (
    <Provider theme={theme} width="100%" height="100%">
      <Button variant="cta">Button</Button>
      <style jsx global>{`
      html, body, #__next {
        width: 100%;
        height: 100%;
        margin: 0;
      }
      `}</style>
    </Provider>
  );
}
