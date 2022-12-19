import React from 'react';
import InputSection from '../components/InputSection';
import TodoListSection from '../components/TodoListSection';

function Main() {
  return (
    <>
      <InputSection />
      {/* 진행 중인 할 일 */}
      <TodoListSection isTodoArea={true} />
      {/* 완료한 할 일 */}
      <TodoListSection isTodoArea={false} />
    </>
  );
}

export default Main;
