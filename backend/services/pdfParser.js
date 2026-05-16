const extractText = require('pdf-text-extract');
const fs = require('fs');
const path = require('path');
const os = require('os');

const parsePDF = async (fileBuffer) => {
    return new Promise((resolve, reject) => {
        // Create temp file
        const tempFile = path.join(os.tmpdir(), `resume_${Date.now()}.pdf`);
        
        // Write buffer to temp file
        fs.writeFileSync(tempFile, fileBuffer);
        
        // Extract text from temp file
        extractText(tempFile, (err, pages) => {
            // Delete temp file
            fs.unlinkSync(tempFile);
            
            if (err) {
                reject(new Error('Error parsing PDF: ' + err.message));
            } else {
                const fullText = pages.join('\n');
                console.log('PDF Text Extracted:', fullText.substring(0, 100)); // Debug
                resolve(fullText);
            }
        });
    });
};

module.exports = { parsePDF };