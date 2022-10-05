import { defineStore } from "pinia";
import csi_general_secretary from "@/assets/csi_general_secretary.webp";
import csi_cogeneral_secretary from "@/assets/csi_cogeneral_secretary.webp";
import gdsc_general_secretary from "@/assets/gdsc_general_secretary.webp";
import fomes_general_secretary from "@/assets/fomes_general_secretary.webp";
import fomes_cogeneral_secretary from "@/assets/fomes_cogeneral_secretary.webp";
import gits_general_secretary from "@/assets/gits_general_secretary.webp";
import gits_cogeneral_secretary from "@/assets/gits_cogeneral_secretary.webp";
import soche_general_secretary from "@/assets/soche_general_secretary.webp";
import soche_cogeneral_secretary from "@/assets/soche_cogeneral_secretary.webp";
import iete_chairman from "@/assets/iete_chairman.webp";
import iete_general_secretary from "@/assets/iete_general_secretary.webp";
import ecell_president from "@/assets/ecell_president.webp";
import ecell_vice_president from "@/assets/ecell_vice_president.webp";

export default defineStore({
  id: "committee",
  state: () => ({
    csi: {
      committee_name: "Computer Society of India",
      description:
        "CSI conducts various workshops, seminars, technical competitions and also Technical fest in association with Computer Association for Technological Trends (CATT). The committee continuously works for fostering experiences, teamwork, networking etc. in our college. It is the committee responsible for organizing all the department level events like workshops, seminars, competitions, Teacher’s day celebrations. CSI CATT also contributes largely in organizing events of Technitude (Technical Festival of DMCE).",
      establishment:
        "CSI DMCE - Student branch, established in the year 2012. The committee is formed by Computer Department students and functions under the guidance of DR. CHHAYA PAWAR (FACULTY COORDINATOR) and DR. AMOL PANDE (HEAD OF DEPARTMENT).",
      leads: [
        {
          name: "Hashir Khan",
          position: "GENEARL SECERETARY",
          src: csi_general_secretary,
        },
        {
          name: "Ganyashree Suvarna",
          position: "CO-GENEARL SECERETARY",
          src: csi_cogeneral_secretary,
        },
      ],
    },
    nss: {
      committee_name: "National Service Scheme",
      description:
        "NATIONAL SERVICE SCHEME also contributes largely in organizing events which provides a national platform to take part in various government led community service activities & programmes.",
      establishment:
        "National Service Scheme was established in the year 2018. All the activities are carried out under the guidance and supervision of Prof. N. M. Deshmukh and Prof. Vaishali K. Gaidhane.",
      leads: [],
    },
    gdsc: {
      committee_name: "Google Developer Student Club",
      description:
        "Google Developer Student Clubs - DMCE is an international community backed by Google for groups of students interested in Google developer technologies. It creates a bridge for students between theory and practice.GDSC also contributes largely by introducing students to real-life problems that can be solved by using the engineering design process. GDSC provides them with platform which helps them in developing problem solving skills as well as communication skills.It creates a bridge for students between theory and practice. GDSC leads are connected to the members of Google and Google developer communities ( Google developer groups, Google developer experts etc.) and other programs including Women Techmakers, scholars, alumina of the former google student ambassador program, interns, facilitators of applied CS programs. Collaborations are encouraged to support each other.",
      establishment:
        "Google Developer Student Club was established in the year 2021. Dr. Chhaya S Pawar is the Faculty Co-ordinator and and encourages the students.",
      leads: [
        {
          name: "Omkar Sawant",
          position: "GENEARL SECERETARY",
          src: gdsc_general_secretary,
        },
      ],
    },
    fomes: {
      committee_name: "Forum of Mechanical Engineering Students",
      description:
        "The Forum of Mechanical Engineering Students [FOMES] also contributes largely in organising events adhering to its manifesto of covering technical as well as non-technical aspects FOMES has organized a variety of events, ranging from Industrial Visits to Blood Donation Camps.The Forum of Mechanical Engineering Students [FOMES] is a self-sustaining student council that provides a platform for the all-around development of the students’ personality and for the overall betterment of the college. It was founded in 2002, by the mechanical engineering students. FOMES is designed with a mission to function as a multidimensional corporate unit. FOMES has been jointly organizing a Technical Festival “TECHNITUDE” since 2002 to train the students of Mechanical Department in the fields of Event Management and Market Economics. During these years, FOMES, with the active help and mentoring of the college and faculty, has attained impressive levels of functioning through team work and leadership.",
      establishment:
        "Forum of Mechanical Students was established in the year 2002. All the efforts are very well encouraged by Prof. B. S. Kale",
      leads: [
        {
          name: "Sandeep Yadav",
          position: "GENEARL SECERETARY",
          src: fomes_general_secretary,
        },
        {
          name: "Prachi Sudhakar",
          position: "CO-GENEARL SECERETARY",
          src: fomes_cogeneral_secretary,
        },
      ],
    },
    gits: {
      committee_name: "Group of Information Technology",
      description:
        "Group of Information Technology (GITS) was established in 2005. It is an apex student body, student’s counsel that integrates the academic, co-curricular spares of student’s life. GITS provides the out of class experience to the academic mission of the department and uplifting student’s intellectual, public service and leadership qualities. The GITS committee includes the members of Third year students. GITS committee solves student’s problems. GITS committee promotes extra-curricular activities in the Information Technology Department. GITS fosters TECHNITUDE, Teachers day and Engineers day celebration etc. GITS is the representative body of the students of the college. The objective is to make the students participate in the development of the institute as well as in the process develop their personality, organizational skills and career through interactive programs with the faculty, administration and society. The goal of the GITS is to provide a common platform to students for co-curricular and extra-curricular activities. It is responsible for all the major technical, cultural, literary and sports activities organized in the college premises. Activities under the council will be well supported by a team of faculty members.",
      establishment:
        "Group Of Information Technology was established in the year 2005. All efforts are very well encouraged by Prof. Vidya Kubde",
      leads: [
        {
          name: "Shrihari Wayal",
          position: "GENEARL SECRETARY",
          src: gits_general_secretary,
        },
        {
          name: "Rupali Sarak",
          position: "CO-GENEARL SECRETARY",
          src: gits_cogeneral_secretary,
        },
      ],
    },
    soche: {
      committee_name: "Student's Organization of Chemical Engineering",
      description:
        "Student’s Organization of Chemical Engineering (SOChE) is the student’s governing body related to Chemical Engineering student’s activities initiated by department students in the year 2005. SOChE arranges industrial visit, seminars, conferences and guest lecture during the academic session. Every year SOChE plays an active participation with other student’s bodies during cultural festival and technical festival to enhance their technical knowledge and thinking ability and to encourage the extra-curricular development of the students.",
      establishment:
        "Student's Organization of Chemical Engineering was established in the year 2005. The committee functions under the guidance of Dr. R. W. Tapre",
      leads: [
        {
          name: "Ajitesh Yadav",
          position: "GENEARL SECRETARY",
          src: soche_general_secretary,
        },
        {
          name: "Akshay Maiya",
          position: "CO-GENEARL SECRETARY",
          src: soche_cogeneral_secretary,
        },
      ],
    },
    aces: {
      committee_name: "Association of Civil Engineering Students",
      description:
        "ASSOCIATION OF CIVIL ENGINEERING STUDENTS contributes largely in organizing events that include Technitude, N Technical Quiz, Expertise Seminars, Special Cells, etc. Diversity and inclusion are embraced to empower all students to succeed in their academic and professional endeavors. Students prepare themselves to be well-rounded professionals, responsible leaders, and lifelong learners through participation in various activities. An ability to function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives.",
      establishment:
        "Association os civil engineering students was established in the year 1997. All efforts are very well encouraged by Dr.A.P.Patil",
      leads: [],
    },
    iete: {
      committee_name:
        "Institution of Electronics and Telecommunication Engineers",
      description:
        "The Institution of Electronics and Telecommunication Engineers (IETE-DMCE) also contributes largely in organizing events like national level project competition ELECTROWIZ. It is actively involved in the publishing of a biannual magazine called “TechBuz It provides a platform to participate in the events to build their skills of team work, leadership, spoken skills, organizational skills, public speaking, professionalism etc. All efforts are very well encouraged by Prof. Preeti Jain",
      establishment:
        "Institution of Electronics and Telecommunication Engineers was established in the year 1953",
      leads: [
        {
          name: "Madhushree Kunder",
          position: "CHAIRMAN",
          src: iete_chairman,
        },
        {
          name: "Ankita Kardile",
          position: "GENEARL SECERETARY",
          src: iete_general_secretary,
        },
      ],
    },
    ecell: {
      committee_name: "Entrepreneurship Cell",
      description:
        "E cell of DMCE was founded in August, 2014 by Mr. Ankit Jaiswal student of Electronics Engineering. E-Cell DMCE called Entrepreneurship Cell is an entrepreneurship promoting organization that aims to provide aspiring entrepreneurs with insights and real-life business experience. They create real life situations by conducting various workshops and events and help youngsters realize their potential. It  promotes the spirit of entrepreneurship. E cell holds seminars and events to foster the same. The aim is to increase the start-up community around.",
      establishment:
        "Entrepreneurship Cell (E-Cell) was established in the year 2014. Mr. Sameer Ekbote is the faculty co-ordinator",
      leads: [
        {
          name: "Aditi Kosamkar",
          position: "President",
          src: ecell_president,
        },
        {
          name: "Srushti Mhatre",
          position: "Vice President",
          src: ecell_vice_president,
        },
      ],
    },
  }),
  actions: {},
});
