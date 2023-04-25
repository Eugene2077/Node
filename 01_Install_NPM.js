// go to the project folder and run the command npm init
// it will create a package.json file
// package.json file contains all the information about the project
// 여기서는 또한 npm i underscore 를 통해 underscore 라는 모듈을 설치하고 
//package.json 에서 dependencies 에 추가된 것을 확인할 수 있다.

// 예전에는 package설치할때마다 --save 를 붙여줘야 했지만 지금은 이걸 안붙여도 dependancy에 추가된다.
// npm i underscore --save 이거 필요없이, 그냥 npm i underscore 만 해도 된다.
// underscore 를 설치하면 node_modules 폴더가 생기고 그 안에 underscore 폴더가 생긴다.
// underscore 폴더 안에는 package.json 파일이 있다.

// npm 모듈에 관한 참고자료, 아래링크 참조
// 코어모듈, 파일모듈, npm 모듈: https://tutorialpost.apptilus.com/code/posts/nodejs/nodejs-modules/

// 설치되는 모듈은 'package.json' 파일에 기록된다. (dependencies) 그리고, 필요한 파일들은 node_modules 폴더에 저장된다.

// 모든 모듈은 dependancy에 저장되기 때문에 다른 사람이 이 프로젝트를 받아서 사용할때, node_modules 폴더를 받아오지 않아도 된다.
//만약 node_modules안의 내용 전부 지우더라도 그냥 npm i 만 하면 된다. 그러면 package.json 에 있는 dependancy 들을 받아온다.
//그러므로 node_modules 폴더는 굳이 깃허브에 올릴 필요가 없다. (gitignore 에 추가해주면 된다.)

// git 설치: 터미널 'git init'
// git 확인: 'git status' : .gitignore에 등록된 파일들은 무시된다.
//