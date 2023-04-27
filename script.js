const judges = [
  {
    name: 'Tyler Perry',
    image: 'Img/judge-1.png',
    job: 'He is an actor, filmmaker, playwright, and entrepreneur.',
    experience: 'He is the creator and performer of Mabel "Madea" Simmons, a tough elderly woman, and also portrays her brother Joe Simmons and her nephew Brian Simmons.',
  },
  {
    name: 'Amanda Holden',
    image: 'Img/judge-2.png',
    job: 'Media personality, actress and singer',
    experience: "She has been a judge on the television talent show competition Britain's Got Talent on ITV"
  },
  {
    name: 'Brandy Norwood',
    image: 'Img/judge-3.png',
    job: 'She is an American singer, songwriter, actress and model. ',
    experience: 'Her sound, characterized by heavy voice-layering and intricate riffs, has seen her nicknamed "the Vocal Bible"',
  },
  {
    name: 'Simon Cowell',
    image: 'Img/judge-4.png',
    job: 'He is an English television personality, entrepreneur and record executive',
    experience: 'He is the creator of The X Factor and Got Talent franchises which have been sold around the world.',
  },
  {
    name: 'Howie Mandel',
    image: 'Img/judge-5.png',
    job: 'He is a Canadian comedian, television personality, actor, and producer.',
    experience: 'Mandel voiced the character Gizmo in the 1984 film Gremlins and the 1990 sequel Gremlins.',
  },
  {
    name: 'Jennifer Aniston',
    image: 'Img/judge-6.png',
    job: ' American actress and producer.',
    experience: 'She rose to international fame for her role as Rachel Green on the television sitcom Friends from 1994 to 2004, for which she earned Primetime Emmy, Golden Globe, and Screen Actors Guild awards. ',
  },
];
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger img');
  const mainContent = document.querySelector('.main');
  const mobilePopUpMenu = document.createElement('div');
  const mobileMenuUl = document.createElement('ul');
  const navlinks = document.querySelectorAll('.nav-div ul li');
  const sections = document.querySelectorAll('section');
  const headerNav = document.querySelectorAll('.nav');
  const footer = document.querySelector('footer');
  mobilePopUpMenu.className = 'left-navigation mobile-menu hide';
  const headline = document.querySelector('.headline');
  mobilePopUpMenu.style.height = `${headline.clientHeight}px`;
  mobilePopUpMenu.style.transition = 'all 1s ease-in-out 0s';

  const createLeftavBar = () => {
    navlinks.forEach((li) => {
      if (!mobilePopUpMenu.classList.contains('hide')) {
        headerNav[0].appendChild(li);
      } else {
        mobileMenuUl.appendChild(li);
      }
    });
  };
  mobilePopUpMenu.appendChild(mobileMenuUl);
  mainContent.appendChild(mobilePopUpMenu);

  const toggleMobileMenu = () => {
    createLeftavBar();
    mobilePopUpMenu.classList.toggle('hide');
    footer.classList.toggle('hide');
    hamburgerMenu.classList.toggle('close-icon');
    sections.forEach((section) => {
      section.classList.toggle('hide');
    });
    sections[0].classList.toggle('left-navigation-backgound');
    sections[0].classList.toggle('hide');
    const mobileMenulinks = document.querySelectorAll('.mobile-menu > ul > li > a');
    mobileMenulinks.forEach((link) => {
      link.addEventListener('click', toggleMobileMenu);
    });
  };

  hamburgerMenu.addEventListener('click', toggleMobileMenu);

  

  // Create judges/
  const morejudge = document.querySelector('.more-judge');

  const createjudge = (judge) => {
    const newjudge = document.createElement('div');
    const newjudgeImage = document.createElement('div');
    const newjudgeimg = document.createElement('img');
    const newjudgeDescriptions = document.createElement('div');
    const newjudgeDescriptionsH2 = document.createElement('h2');
    const newjudgeDescriptionsSpan1 = document.createElement('span');
    const newjudgeDescriptionsSpan2 = document.createElement('span');
    const newjudgeDescriptionsSpan3 = document.createElement('span');

    // Add classes
    newjudge.className = 'judge';
    newjudgeImage.className = 'judge-image';
    newjudgeimg.alt = 'judge\'s photo';
    newjudgeDescriptions.className = 'judge-description';
    newjudgeDescriptionsH2.className = 'name';
    newjudgeDescriptionsSpan1.className = 'job-title';
    newjudgeDescriptionsSpan2.className = 'line';
    newjudgeDescriptionsSpan3.className = 'experience';

    // Assign values
    newjudgeimg.src = `${judge.image}`;
    newjudgeDescriptionsH2.textContent = judge.name;
    newjudgeDescriptionsSpan1.textContent = judge.job;
    newjudgeDescriptionsSpan3.textContent = judge.experience;

    // Construct a judge div
    newjudgeDescriptions.appendChild(newjudgeDescriptionsH2);
    newjudgeDescriptions.appendChild(newjudgeDescriptionsSpan1);
    newjudgeDescriptions.appendChild(newjudgeDescriptionsSpan2);
    newjudgeDescriptions.appendChild(newjudgeDescriptionsSpan3);
    newjudgeImage.appendChild(newjudgeimg);
    newjudge.appendChild(newjudgeImage);
    newjudge.appendChild(newjudgeDescriptions);

    return newjudge;
  };

  if (morejudge) {
    judges.forEach((judge) => {
      morejudge.insertAdjacentElement('beforebegin', createjudge(judge));
    });
  }
});