import React from 'react';

import { DropzoneArea } from 'material-ui-dropzone';
import api from '../../../../services/api.service';
import { useStyles } from './styles';

const TIFileUpload: React.FC = () => {
  const classes = useStyles();
  const [uploadedFiles, setUploadedFiles] = React.useState<any>([]);

  function handleUpload(files: File[]) {
    const data = new FormData();

    for (let index = 0; index < files.length; index += 1) {
      data.append(`attachment`, files[index]);
    }

    setUploadedFiles(data);
  }

  async function handleSend() {
    // await api.post('/files', uploadedFiles).then(response => {
    //   console.log(response.data);
    // });
    // eslint-disable-next-line no-restricted-syntax
    for (const value of uploadedFiles) {
      console.log(value[1]);
    }
    console.log(uploadedFiles);
  }

  return (
    <>
      <DropzoneArea
        showPreviews
        showPreviewsInDropzone={false}
        useChipsForPreview
        previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
        previewChipProps={{ classes: { root: classes.previewChip } }}
        previewText="Selected files"
        acceptedFiles={['.pdf']}
        dropzoneText="Arraste e solte um arquivo aqui ou clique"
        onChange={file => handleUpload(file)}
      />
      <button type="button" onClick={handleSend}>
        Upload
      </button>
    </>
  );
};

export default TIFileUpload;
