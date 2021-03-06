import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 0,
      title: 'Podium360',
      desc: '',
      livedemo: 'https://www.podyam.com',
      githurl: '#',
      imgUrl: 'assets/images/podium.png',
      tech: 'Dotnet, Angular , c# , MSSQL, CosmosDb, QuartzNet, DevExpress, NET5, Redis, RabbitMq, MicroService, Azure, Docker',
      date: "Dec 01, 2020",
    },
    {
      id: 4,
      title: 'Desktop application for school management',
      desc: '',
      livedemo: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6589859010030129152',
      githurl: 'https://github.com/AdelSS04/SchoolManager',
      imgUrl: 'assets/images/cs.PNG',
      tech: 'C#.NET ; Microsoft Access',
      date: "Jan 01, 2019",

    },
 

    {
      id: 3,
      title: 'End of year project : Design and development of a web-mobile reception control platform',
      desc: '',
      livedemo: 'https://www.linkedin.com/posts/adellajil_pfa-csharp-wcf-activity-6562611044022263808-f3BP/',
      githurl: '#',
      imgUrl: 'assets/images/pfa.png',
      tech: 'C#, .Net , SQL , Visual Studio ,ASP.NET, WCF, IIS, MSSM, xamarin',
      date: "Juin 01, 2019",

    },

 
    {
      id: 2,
      title: 'Stock Management',
      desc: '',
      livedemo: 'https://www.linkedin.com/posts/adellajil_dotnet-erp-sql-activity-6724679224088662016-Aou2',
      githurl: 'https://github.com/AdelSS04/StockManagement',
      imgUrl: 'assets/images/stock.PNG',
      tech: 'Angular 10, Asp WebAPi, MSSQL, Azure',
            date: "Juin 01, 2020",

    },

    {
      id: 1,
      title: 'SnB : Sell & Buy App',
      desc: '',
      livedemo: 'https://www.snbapp.com',
      githurl: '#',
      imgUrl: 'assets/images/Snb.png',
      tech: 'NetCore, MySql , Docker & Firebase',
      date: "Fev 01, 2021",

    },
    
    {
      id: 6,
      title: 'Clean DDD Architecture',
      desc: '',
      livedemo: '#',
      githurl: 'https://github.com/AdelSS04/CleanDDDArchitecture',
      imgUrl: 'https://blob.jacobsdata.com/software-alchemy/entry7/clean-domain-driven-design-jacobs-510.png',
      tech: 'NetCore, EfCore , Repository Pattern, DDD',
      date: "Aug 01, 2021",

    },

  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 9,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
