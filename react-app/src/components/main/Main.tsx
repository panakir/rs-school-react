import { Component } from 'react';
import { TopSection } from '../topSection/TopSection';
import { BottomSection } from '../bottomSection/BottomSection';

export class Main extends Component {
  render() {
    return (
      <>
        <main className="main">
          <TopSection />
          <BottomSection />
        </main>
      </>
    );
  }
}
