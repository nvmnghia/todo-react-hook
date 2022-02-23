import React, { ChangeEvent } from 'react';

const TodoContent = ({ content }: { content: string }) => <>{content}</>;

interface TodoEditorProps {
  tmpContent: string;
  onChange: (content: string) => void;
}

const TodoEditor = ({ tmpContent, onChange }: TodoEditorProps) => {
  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(value);
  };

  return (
    <textarea
      className='w-100'
      value={tmpContent}
      onChange={handleChange}
    ></textarea>
  );
};

export { TodoContent, TodoEditor };
