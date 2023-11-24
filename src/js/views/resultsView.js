import View from './view.js';
import PreviewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `We couldn't find that recipie. Please try again!`;
  _message = '';

  _generateMarkup(results) {
    return results.map(result => PreviewView.render(result, false)).join('');
  }
}

export default new ResultsView();
