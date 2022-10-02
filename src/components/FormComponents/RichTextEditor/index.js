import React from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-classic';

const InputRTE = ({ data }) => {
  return (
    <CKEditor
      editor={InlineEditor}
      data={data}
      onReady={editor => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();

        document.getElementsByName('description')[0].value = data
        // console.log('teste', { event, editor, data });
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor);
      }}
    />
  );
};

export default InputRTE;
