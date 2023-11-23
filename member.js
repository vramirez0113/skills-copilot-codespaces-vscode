function skillsMember() {
  const member = document.querySelector('.member');
  const memberSkills = document.querySelector('.member__skills');
  const memberSkillsItem = document.querySelectorAll('.member__skills-item');
  const memberSkillsItemTitle = document.querySelectorAll(
    '.member__skills-item-title'
  );
  const memberSkillsItemBar = document.querySelectorAll(
    '.member__skills-item-bar'
  );

  if (member) {
    member.addEventListener('click', () => {
      memberSkills.classList.toggle('active');
    });
  }

  if (memberSkillsItem) {
    memberSkillsItem.forEach((item, index) => {
      item.addEventListener('click', () => {
        memberSkillsItemTitle[index].classList.toggle('active');
        memberSkillsItemBar[index].classList.toggle('active');
      });
    });
  }
}