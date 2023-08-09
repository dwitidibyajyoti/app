import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent } from '@syncfusion/ej2-react-documenteditor';
import { registerLicense } from '@syncfusion/ej2-base';
function Convert() {
    registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhAYVBpR2NbfE5xflFEal1WVAciSV9jS31TfkVnWX5acnVcRmNZVA==');
    let documenteditor;

    function onImportClick() {
        //Open file picker.
        document.getElementById('file_upload').click();
    }
    function onFileChange(e) {
        if (e.target.files[0]) {
            //Get selected file.
            let file = e.target.files[0];
            if (file.name.substr(file.name.lastIndexOf('.')) !== '.sfdt') {
                loadFile(file);
            }
        }
    }

    function loadFile(file) {
        let ajax = new XMLHttpRequest();
        ajax.open('POST', 'https://localhost:5166/api/documentconverter/import', true);
        ajax.onreadystatechange = () => {
            if (ajax.readyState === 4) {
                if (ajax.status === 200 || ajax.status === 304) {
                    // open SFDT text in document editor
                   
                   console.log(ajax.responseText);
                }
            }
        };
        let formData = new FormData();
        formData.append('files', file);
        ajax.send(formData);
    }
    return (
        <div>
            <input type="file" id="file_upload" accept=".dotx,.docx,.docm,.dot,.doc,.rtf,.txt,.xml,.sfdt" onChange={onFileChange} />
            <button onClick={onImportClick}>Import</button>
            <DocumentEditorComponent id="container" height={'330px'} ref={scope => {
                documenteditor = scope;
            }} />
        </div>
    );
}
export default Convert;
