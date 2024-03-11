import { Component, Input } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs= pdfFonts.pdfMake.vfs

@Component({
  selector: 'app-pdfmaker',
  templateUrl: './pdfmaker.component.html',
  styleUrls: ['./pdfmaker.component.css']
})
export class PdfmakerComponent {

  @Input() blogs:any

  generatePdf() {
    let docDefinition: any; 
  
    if (this.blogs && this.blogs.length > 0) {
      const content =[]
      for(let i=0;i<this.blogs.length;i++){
        content.push(this.blogs[i].title);
        content.push(this.blogs[i].descripition);
      }
      docDefinition = {
        content: content
      };
    } else {
      alert("Blogs array is empty or undefined.");
    }
  
    const fontLoadPromise = new Promise<void>((resolve, reject) => {
      if (pdfFonts.pdfMake.vfs) {
        resolve();
      } else {
        reject(new Error('Fonts not loaded'));
      }
    });
  
    fontLoadPromise.then(() => {
      pdfMake.createPdf(docDefinition).open();
    }).catch((error) => {
      console.error('Error loading fonts:', error);
    });
  }
}
