import './scss/index.scss'
import {Sheet} from '@/components/sheet/Sheet';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';

const sheet = new Sheet('#app', {
  components: [Header, Toolbar, Formula, Table]
});

sheet.render();
