import { Module } from '@nestjs/common';
import { CategoryModule } from './Category/Category.module';
import { DocumentModule } from './Document/Document.module';
import { EducationModule } from './Education/Education.module';
import { PositionAppliedForModule } from './PositionAppliedFor/PositionAppliedFor.module';
import { WorkExperienceModule } from './WorkExperience/WorkExperience.module';
import { TrainingModule } from './Training/Training.module';
import { LanguageModule } from './Language/Language.module';
import { ProfilePictureModule } from './ProfilePicture/ProfilePicture.module';
import { ProfileModule } from './Profile/Profile.module';
import { PeriodModule } from './Period/Period.module';
import { ProfessionalReferencesModule } from './ProfessionalReferences/ProfessionalReferences.module';
import { PersonalReferencesModule } from './PersonalReferences/PersonalReferences.module';
import { SubscriptionModule } from './Subscription/Subscription.module';
import { JobOpeningModule } from './JobOpening/JobOpening.module';
import { UserModule } from './User/User.module';
import { EmailModule } from './Email/Email.module';
import { ShowPDFModule } from './ShowPdf/ShowPdf.module';
import { ShowImgModule } from './ShowImg/ShowImg.module'
import { LoginModule } from './Login/Login.module';
import { ProfileAssessmentModule } from './ProfileAssessment/ProfileAssessment.module';
import { LanguageAssessmentModule } from './LanguageAssessment/LanguageAssessment.module';
import { KnowledgeAssessmentModule } from './KnowledgeAssessment/KnowledgeAssessment.module';
import { ProfileParticularsModule } from './ProfileParticulars/ProfileParticulars.module';
import { ProfileAnswerModule } from './ProfileAnswer/ProfileAnswer.module';
import { LanguageAnswerModule } from './LanguageAnswer/LanguageAnswer.module';
import { KnowledgeAnswerModule } from './KnowledgeAnswer/KnowledgeAnswer.module';
import { ProfileParticularsAnswerModule } from './ProfileParticularsAnswer/ProfileParticularsAnswer.module';

@Module({
  imports: [
    CategoryModule,
    DocumentModule,
    EducationModule,
    PositionAppliedForModule,
    WorkExperienceModule,
    TrainingModule,
    LanguageModule,
    ProfilePictureModule,
    ProfileModule,
    PeriodModule,
    ProfessionalReferencesModule,
    PersonalReferencesModule,
    SubscriptionModule,
    JobOpeningModule,
    UserModule,
    EmailModule,
    ShowPDFModule,
    ShowImgModule,
    LoginModule,
    ProfileAssessmentModule,
    LanguageAssessmentModule,
    KnowledgeAssessmentModule,
    ProfileParticularsModule,
    ProfileAnswerModule,
    LanguageAnswerModule,
    KnowledgeAnswerModule,
    ProfileParticularsAnswerModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
