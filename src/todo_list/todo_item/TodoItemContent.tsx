export {};

const TodoContent = ({ content }: { content: string }) => <>{content}</>;

const TodoEditor = ({ content }: { content: string }) => (
  <textarea className='w-100' defaultValue={content}></textarea>
);

export { TodoContent, TodoEditor };
