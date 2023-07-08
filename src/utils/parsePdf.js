/**
 * @Author: 派同学
 * @Description: How
 */
import { nextTick } from 'vue'
import html2pdf from 'html2pdf.js'
const htmlToPdf = {
  getPdf (title) {
    nextTick(() => {
      const element = document.getElementById('tpl_box')
      const options = {
        margin: [5, 0, 20, 0],
        filename: title + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      }
      document.getElementById('basicInfo').style.paddingTop = '0px!important'
      html2pdf().set(options).from(element).save()
    })
  }
}

export default htmlToPdf
