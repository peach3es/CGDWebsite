

function PDFViewer(){

    const openPDF = () => {
        const pdfURL = '/uploads/sample.pdf';

        window.open(pdfURL, '_blank');
        
    };

    
    return (
            <div className="button-container">
                <a onClick={openPDF} className="button"><p> Click here for the detailed sponsorship package PDF</p></a>
            </div>
            

    );
    
}

export default PDFViewer;

