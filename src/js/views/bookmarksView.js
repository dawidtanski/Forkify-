import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';
  _clearBookmarksButton = document.querySelector('.btn_clear_bookmarks');
  _deleteBookmarkButton = document.querySelector('.delete-bookmark-button');

  constructor() {
    super();
    this._addHandlerClearBookmarks();
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  // _generateMarkup() {
  //   return this._data
  //     .map(bookmark => previewView.render(bookmark, false))
  //     .join('');
  // }

  _generateMarkup() {
    return this._data
      .map(
        bookmark => `
        <div class="bookmark">
          ${previewView.render(bookmark, false)}
          <button class="delete-bookmark-button">
          <svg class="recycle" width="16px" height="16px" fill="#000000" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="m437.88 81.874h-71.646v-58.91c0-12.682-10.282-22.964-22.964-22.964h-174.55c-12.682 0-22.964 10.282-22.964 22.964v58.91h-71.646c-12.682 0-22.964 10.282-22.964 22.964s10.282 22.964 22.964 22.964h2.794v361.23c0 12.682 10.282 22.964 22.964 22.964h312.25c12.682 0 22.964-10.282 22.964-22.964v-361.23h2.794c12.682 0 22.964-10.282 22.964-22.964s-10.281-22.965-22.963-22.965zm-117.58-35.945v35.945h-128.62v-35.945h128.62zm68.853 420.14h-266.32v-338.27h266.32v338.27z"/>
          <path d="m184.04 413.98c12.682 0 22.964-10.282 22.964-22.964v-166.64c0-12.682-10.282-22.964-22.964-22.964s-22.964 10.282-22.964 22.964v166.64c0 12.682 10.282 22.964 22.964 22.964z"/>
          <path d="m256 413.98c12.683 0 22.964-10.282 22.964-22.964v-166.64c0-12.682-10.282-22.964-22.964-22.964s-22.964 10.282-22.964 22.964v166.64c0 12.682 10.282 22.964 22.964 22.964z"/>
          <path d="m327.95 413.98c12.682 0 22.964-10.282 22.964-22.964v-166.64c0-12.682-10.282-22.964-22.964-22.964s-22.964 10.282-22.964 22.964v166.64c0 12.682 10.282 22.964 22.964 22.964z"/>
      </svg>
          </button>
        </div>
      `
      )
      .join('');
  }

  _addHandlerClearBookmarks(handler) {
    this._clearBookmarksButton.addEventListener('click', handler);
  }

  // _addHandlerDeleteBookmark(handler) {
  //   if (this._deleteBookmarkButton) {
  //     let deleteButton = e.target.closest('.delete-bookmark-button');
  //     const bookmarkID = deleteButton.dataset.id;
  //     this._deleteBookmarkButton.addEventListener('click', handler);
  //     console.log(`Bookmark deleted`);
  //   } else {
  //     console.log('Nie istnieje');
  //   }
  // }

  _addHandlerDeleteBookmark(handler) {
    const parentElement = document.querySelector('.bookmarks__list');
    if (parentElement) {
      parentElement.addEventListener('click', e => {
        const deleteButton = e.target.closest('.delete-bookmark-button');
        if (deleteButton) {
          const bookmarkDiv = deleteButton.closest('.bookmark');
          const previewLink = bookmarkDiv.querySelector('.preview__link');

          if (previewLink) {
            const bookmarkID = previewLink.hash.substring(1);
            handler(bookmarkID);
            console.log(`Bookmark deleted with ID: ${bookmarkID}`);
          } else {
            console.error('Nie znaleziono .preview_link w obrębie .bookmark');
          }
        }
      });
    } else {
      console.log('Nie istnieje');
    }
  }

  // _addHandlerDeleteBookmark(handler) {
  //   console.log('_deleteBookmarkButton:', this._deleteBookmarkButton);
  //   if (this._deleteBookmarkButton) {
  //     this._deleteBookmarkButton.addEventListener('click', e => {
  //       const deleteButton = document.querySelectorAll(
  //         '.delete-bookmark-button'
  //       );
  //       // const deleteButton = e.target.closest('.delete-bookmark-button');
  //       if (deleteButton) {
  //         console.log(`Delete button istnieje`);
  //         const previewView = deleteButton.nextElementSibling;
  //         const bookmarkID = previewView.dataset.preview_link;
  //         handler(bookmarkID);
  //         console.log(`Bookmark deleted with ID: ${bookmarkID}`);
  //       }
  //     });
  //   } else {
  //     console.log('Nie istnieje');
  //   }
  // }

  // _clearBookmarks = function () {
  //   console.log('Bookmarks cleared');
  //   localStorage.clear('bookmarks');
  //   // return ``;
  // };

  // _addHandlerClearBookmarks() {
  //   this._clearBookmarksButton.addEventListener(
  //     'click',
  //     this._clearBookmarks.bind(this)
  //   );
  // }

  // _addHandlerClearBookmarks(handler) {
  //   this._parentElement.addEventListener('click', function (e) {
  //     const btn = e.target.closest('.btn_clear_bookmarks');
  //     if (!btn) return;
  //     localStorage.clear('bookmarks');
  //     handler();
  //   });
  // }
}

export default new BookmarksView();
