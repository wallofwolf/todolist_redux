import Headers from './components/Headers';
import InputSection from './components/InputSection';
import TodoListSection from './components/TodoListSection';
import Footer from './components/Footer';

import { useSelector } from 'react-redux';

function App() {
  return (
    <div>
      <Headers />
      <main>
        <InputSection />
        {/* 진행 중인 할 일 */}
        <TodoListSection isTodoArea={true} />
        {/* 완료한 할 일 */}
        <TodoListSection isTodoArea={false} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
