import React from "react";
import { motion } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

import ProjectsList from "./ProjectsList";
import Project1Page from "./project-pages/Project1Page";
import Project2Page from "./project-pages/Project2Page";
import Project3Page from "./project-pages/Project3Page";
import Project4Page from "./project-pages/Project4Page";
import Project5Page from "./project-pages/Project5Page";
import Project6Page from "./project-pages/Project6Page";

import { pageVariants, pageTransition } from "./Home";

export default function Projects({ match }) {
  const location = useLocation();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Switch location={location} key={location.pathname}>
        <Route path={match.path} exact>
          <ProjectsList url={match.url} />
        </Route>
        <Route path={`${match.path}/project1`} component={Project1Page} />
        <Route path={`${match.path}/project2`} component={Project2Page} />
        <Route path={`${match.path}/project3`} component={Project3Page} />
        <Route path={`${match.path}/project4`} component={Project4Page} />
        <Route path={`${match.path}/project5`} component={Project5Page} />
        <Route path={`${match.path}/project6`} component={Project6Page} />
      </Switch>
    </motion.div>
  );
}
