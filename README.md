### Linting Formatting Practice

### Project Description
 - About
This project focuses on improving code quality in an Angular application by integrating ESLint and Prettier. It involves configuring ESLint, adding custom rules, fixing linting errors, and documenting fixes. It also involves integrating Prettier for consistent code formatting and automating both tools using npm scripts and pre-commit hooks.

### Setup Instructions

## 1. Fork the Repository
Find Repo at: https://github.com/AmaliTech-Training-Academy/linting-formatting-practice

## 2. Clone the Repository
Open your terminal or command prompt and run the following command to clone the repository to your local machine:
- Replace the {user-name} with your github username excluding the curly braces {}
```bash
https://github.com/{user-name}/Angular-Code-Quality-Enforcer.git
```

## 3. Navigate to Project
```
cd repository-name
```

## 4. Install Dependencies
Run the following command to install the project dependencies:
```
npm install
```

<!-- ## 5. Install ESLint and Related Packages
Run the following commands to install ESLint and its necessary plugins:
```
npm install --save-dev eslint@9.10.0 @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import
``` -->

## 5. Run ESLint
To check your code for linting issues, run:
```
npm run lint
```

### Errors
After running the 'npm run lint' command, the following errors were detected:
```
D:\Amalitech Frontend Labs\ANGULAR\Angular-Code-Quality-Enforcer\src\app\app.component.ts
  15:3   warning  Lifecycle interface 'OnInit' should be implemented for method 'ngOnInit'. (https://angular.dev/style-guide#style-09-01)  @angular-eslint/use-lifecycle-interface
  23:17  warning  Missing semicolon                                                                                                        semi
  24:19  warning  Missing semicolon  
  
  ✖ 3 problems (0 errors, 3 warnings)                                                                                                      semi
```

- The first warning was fixed by adding 'implements OnInit' to the App Component Class and importing OnInit in the component.
- The last two warnings were fixed by placing a semi-colon at the ends of the statements made on line 23, and line 24;
Running 'npm run lint' after fixing the errors did not generate any further errors. 


