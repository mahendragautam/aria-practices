# SmartFamilyPicks Quiz Creator

A powerful WordPress plugin that allows you to create and publish interactive quiz posts with multiple choice questions. Display quizzes anywhere on your site using shortcodes.

## Features

- **Custom Post Type**: Dedicated "Quiz" post type for easy management
- **Intuitive Admin Interface**: Easy-to-use interface for creating quizzes with questions and answers
- **Multiple Choice Questions**: Support for 4 answer options per question with correct answer selection
- **Shortcode Support**: Display quizzes on any page or post using simple shortcodes
- **Optimized Asset Loading**: CSS and JavaScript files load only when shortcode is used
- **Responsive Design**: Beautiful, mobile-friendly quiz display
- **Quiz Settings**: Configure pass percentage, result display, and question randomization
- **Real-time Feedback**: Immediate feedback on correct/incorrect answers
- **Score Calculation**: Automatic scoring with pass/fail results

## Installation

1. Upload the `smartfamilypicks-quiz-creator` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Start creating quizzes from the WordPress admin dashboard

## Usage

### Creating a Quiz

1. Go to **Quizzes > Add New** in your WordPress admin dashboard
2. Enter a title for your quiz
3. Add an optional description in the excerpt field
4. Click **Add Question** to add quiz questions
5. For each question:
   - Enter the question text
   - Fill in all 4 answer options
   - Select the radio button next to the correct answer
6. Configure quiz settings in the sidebar:
   - **Show results immediately**: Display results after submission
   - **Randomize question order**: Shuffle questions for each user
   - **Pass Percentage**: Set the minimum score to pass (default: 70%)
7. Publish your quiz

### Displaying a Quiz

Use the shortcode to display your quiz on any page or post:

```
[sfp_quiz id="123"]
```

Replace `123` with your quiz post ID. You can find the shortcode in the Quiz Settings meta box when editing a quiz, and copy it with one click.

### Admin Features

- **Visual Question Builder**: Add unlimited questions with a user-friendly interface
- **Drag and Reorder**: Questions are numbered automatically
- **Quick Copy**: One-click shortcode copying
- **Form Validation**: Ensures all required fields are completed before publishing
- **Auto-save**: WordPress autosave keeps your work safe

### Frontend Features

- **Clean Design**: Modern, responsive quiz interface
- **Instant Feedback**: Shows correct/incorrect answers immediately
- **Score Display**: Beautiful results display with score and pass/fail status
- **Try Again**: Users can retake the quiz
- **Accessibility**: Properly labeled form elements for screen readers

## Quiz Settings

### Show Results Immediately
When enabled, users see their score and correct answers immediately after submitting the quiz.

### Randomize Question Order
Randomizes the order of questions each time the quiz is loaded, making it more challenging for repeat attempts.

### Pass Percentage
Set the minimum percentage score required to pass the quiz (0-100%).

## File Structure

```
smartfamilypicks-quiz-creator/
├── admin/
│   ├── css/
│   │   └── admin-style.css
│   └── js/
│       └── admin-script.js
├── includes/
│   ├── class-quiz-post-type.php
│   ├── class-quiz-meta-boxes.php
│   └── class-quiz-shortcode.php
├── public/
│   ├── css/
│   │   └── quiz-style.css
│   └── js/
│       └── quiz-script.js
├── smartfamilypicks-quiz-creator.php
└── README.md
```

## Developer Notes

### Hooks and Filters

The plugin follows WordPress best practices and uses the singleton pattern for class instances.

### Asset Enqueuing

- Admin assets load only on quiz edit screens
- Frontend assets load only when the shortcode is used
- All scripts and styles are properly versioned

### Security

- Nonce verification for all form submissions
- Data sanitization and validation
- Capability checks for admin operations
- Escaped output for all user-generated content

## Requirements

- WordPress 5.0 or higher
- PHP 7.0 or higher
- jQuery (included with WordPress)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Changelog

### Version 1.0.0
- Initial release
- Custom quiz post type
- Question and answer management
- Shortcode support
- Responsive design
- Admin interface
- Score calculation
- Quiz settings

## Support

For issues, questions, or contributions, please visit:
https://smartfamilypicks.com/support

## License

This plugin is licensed under the GPL v2 or later.

## Credits

Developed by SmartFamilyPicks
https://smartfamilypicks.com
