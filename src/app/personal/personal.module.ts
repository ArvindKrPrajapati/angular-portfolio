import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceComponent } from './experience/experience.component';
import { SocialComponent } from './landing/social/social.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PersonalComponent,
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent,
    ContactComponent,
    ExperienceComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    NgbCarouselModule,
    HttpClientModule
  ]
})
export class PersonalModule { }
