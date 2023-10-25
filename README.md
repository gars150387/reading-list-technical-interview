# Book List Application

## Introduction

This project involves designing and implementing a small web application for managing a list of books using the tools of your choice.

## Participation

This project is open for review until July 27, 2023. It is designed as a real-world test for junior developers. The objective is to assess your skills in user interaction, state management, data filtering, and code structuring.

## Context

We are a multinational book publishing company. We aim to provide our audience with a way to view our catalog and save books of interest in a reading list.

In this regard, we want to develop a web application that allows users to view available books and create a reading list. Please note the following:

- We are uncertain if the framework we currently use will be final, but we want to reuse as much code as possible.
- The application should be user-friendly and visually appealing.
- About 80% of our users access our services via desktop browsers.
- You can use the "books.json" file to fetch book data. Feel free to add more books, provided they follow the same structure.

## Requirements

### Functionality

1. **Display Available Books**: The application should display a list of available books that users can review.

2. **Create Reading List**: Users should be able to create a reading list from the available books. The user interface should clearly indicate which books are in the reading list and which are not. It should also be possible to move a book from the reading list to the available list.

3. **Genre-based Book Filtering**: Users should be able to filter the list of available books by genre. A counter should show the number of available books, the number of books in the reading list, and the number of available books in the selected genre.

4. **State Synchronization**: Global state synchronization is required to reflect the number of books in the reading list and the number of books still available. If a book moves from the available list to the reading list, both counters should update accordingly.

5. **Data Persistence**: The application should persist the reading list data in the browser's local storage. Upon reloading the page, the reading list should remain intact.

6. **Multi-tab Synchronization**: If a user opens the application in two different tabs, changes made in one tab should be reflected in the other without requiring backend support.

7. **Deployment**: The application must be deployed on a free hosting service (e.g., Netlify, Vercel, Firebase) and be accessible via a public URL. Include the URL in the README.

8. **Testing**: The application should have at least one test. Write the test that you consider most important for your application.

### Code Recommendations

- **Code Structure**: Ensure that your code is well-organized and easy to read.
- **HTML Semantics**: Use semantic and accessible HTML.
- **Team Considerations**: Prepare your project with the idea that any team member may have to work on it in the future (e.g., scripts in package.json, minimal README documentation, code comments if necessary).
- **Code Formatting**: Make sure your code is consistently formatted. You can use Prettier or your preferred code formatting tool.
- **Production-Ready**: Ensure your application is production-ready. Minimize code, optimize images, and take other necessary steps.

### Additional Challenges

Want to go the extra mile? Consider these additional challenges:

- **Implement Search Functionality**: Add a search feature to filter the list of available books.
- **Add a Page Number Filter**: Include a filter to select books based on the number of pages.
- **Allow Reordering of Reading List**: Let users rearrange books in their reading list by priority.
- **Make the Design Responsive**: Create a responsive design.
  
## Interview Phase

If you progress to the next phase, you'll have an interview with us. During the interview, you'll be expected to:

- Explain your code and the decisions you made.
- Make live code adaptations as we modify the JSON data.
- Implement a new filter in the application.

Good luck and have fun coding!

## References

- [Design by Josh W. Comeau for a to-read book application](https://twitter.com/JoshWComeau/status/1678893330480898049)
- [Dribbble redesign of Goodreads](https://dribbble.com/shots/2523654-Books-listing-page-goodreads)
- [Book-dragging concept](https://dribbble.com/shots/19351938-Mybooks-Page-Board)
- [Landing page concept for a book application](https://dribbble.com/shots/16279204-Book-Web-Store-Concept)