import React, { ChangeEvent } from 'react';

const TodoContent = ({ content }: { content: string }) => <>{content}</>;

interface TodoEditorProps {
  tmpContent: string;
  onChange: (content: string) => void;
}

const TodoEditor = (props: TodoEditorProps) => {
  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(value);
  };

  return (
    <textarea
      className='w-100'
      value={props.tmpContent}
      onChange={handleChange}
    ></textarea>
  );
};

export { TodoContent, TodoEditor };
