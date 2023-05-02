<script>
  const projects = [
    {
      name: "Project 1",
      img: "https://images.unsplash.com/photo-1683016390026-b5087a17e21f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "https://example.com/project1",
      repo: "https://github.com/example/project1"
    },
    {
      name: "Project 2",
      img: "https://images.unsplash.com/photo-1682862516196-0ed3cb7d8f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80",
      link: "https://example.com/project2",
      repo: "https://github.com/example/project2"
    },
    {
      name: "Project 3",
      img: "https://images.unsplash.com/photo-1682861941586-f90d0ea62cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "https://example.com/project3",
      repo: "https://github.com/example/project3"
    },
    {
      name: "Project 4",
      img: "https://images.unsplash.com/photo-1683016390026-b5087a17e21f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "https://example.com/project1",
      repo: "https://github.com/example/project1"
    },
    {
      name: "Project 5",
      img: "https://images.unsplash.com/photo-1682862516196-0ed3cb7d8f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80",
      link: "https://example.com/project2",
      repo: "https://github.com/example/project2"
    },
    {
      name: "Project 6",
      img: "https://images.unsplash.com/photo-1682861941586-f90d0ea62cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "https://example.com/project3",
      repo: "https://github.com/example/project3"
    }
  ];
</script>

<div class="projects-container border-bottom">
  <h2>My projects</h2>
  <div class="projects">
    {#each projects as project}
      <div class="project shadow wobble">
        <a href={project.link}><div class="project-img" style="background-image: url('{project.img}')">
          <div class="project-footer">
            <span class="project-name">{project.name}</span>
            <a href={project.repo}><div class="project-repo">GitHub</div></a>
          </div>
        </div></a>
      </div>
    {/each}
  </div>
</div>

<style>
  .projects-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 4rem;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    gap: 1.5rem;
  }

  .project {
    margin: 1rem;
  }

  .project-img {
    width: 500px;
    height: 350px;
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
  }

  .project-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-name {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.6rem;
  }

  .project-repo {
    background-color: #1F1F1F;
    color: #ffffff;
    border: none;
    padding: 0.6rem;
    cursor: pointer;
    font-size: 1.2rem;
  }
</style>

