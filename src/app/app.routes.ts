import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { Project } from './project/project';
import { Form } from './form/form';
import { StringInterpolation } from './string-interpolation/string-interpolation';
import { Calculator } from './calculator/calculator';
import { Student } from './student/student';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { AdditionExample } from './addition-example/addition-example';
import { Directives } from './directives/directives';
import { ApiPractice } from './api-practice/api-practice';

export const routes: Routes = [
    {path: "", component: Home},
    // {path: "services", component: Services},
    // {path: "gallery", component: Gallery},
    // {path: "contact", component: Contact},
    {path: "project", component: Project},
    {path: "form", component : Form},
    {path: "interpolation", component :StringInterpolation},
    {path: "calculator", component :Calculator},
    {path: "student", component :Student},
{path: "registration", component :ReactiveForms},
{path: "reactive-addition", component :AdditionExample}, 
{path: "directives", component :Directives},
{path: "services", component :Services},
{path: "api-practice", component :ApiPractice}

    
];
