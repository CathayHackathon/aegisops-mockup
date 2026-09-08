/* @ds-bundle: {"format":4,"namespace":"RootNGGithub_2eba97","components":[],"sourceHashes":{"ui_kits/merchant-portal/accounts.jsx":"c9aa2a647488","ui_kits/merchant-portal/app.jsx":"cb69677ba715","ui_kits/merchant-portal/components.jsx":"d4972426a76f","ui_kits/merchant-portal/dashboard.jsx":"be72d237eae3","ui_kits/merchant-portal/refund.jsx":"263aab5e574d","ui_kits/merchant-portal/settlement.jsx":"91d1d1be3191","ui_kits/merchant-portal/shell.jsx":"4ccb20c1e497","ui_kits/merchant-portal/transactions.jsx":"f8bc8f5a64d1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RootNGGithub_2eba97 = window.RootNGGithub_2eba97 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/merchant-portal/accounts.jsx
try { (() => {
/* global React, PageHead, Section, Tag, Button, TextButton, Icon, Switch, Chip, Paginator, Checkbox, Select, FilterBar */
const {
  useState: useStateAcc
} = React;

/* ============================================================================
   Accounts — settings-1 template (人員權限設定)
   sources/templates/settings-1.decoded.html

   Layout:
     PageHead
     Section "查詢條件" — 國家 chip rail + 部門/科室/角色/姓名 filters + 查詢
     Section "查詢結果" flush — table with 啟用 switch + 異動 action + paginator
   ========================================================================== */

const COUNTRIES = ['全選', '台灣', '香港', '新加坡', '越南', '柬埔寨', '緬甸', '寮國'];
const ROWS = [{
  id: 'U-001',
  dept: '商家服務一部',
  team: '收單科',
  role: '管理員',
  name: '陳O宏',
  email: 'chen****@example.com',
  enabled: true,
  changed: '2026/05/18'
}, {
  id: 'U-002',
  dept: '商家服務一部',
  team: '收單科',
  role: '審核員',
  name: '林O美',
  email: 'lin*****@example.com',
  enabled: true,
  changed: '2026/05/16'
}, {
  id: 'U-003',
  dept: '商家服務一部',
  team: '對帳科',
  role: '操作員',
  name: '王O明',
  email: 'wang****@example.com',
  enabled: true,
  changed: '2026/05/12'
}, {
  id: 'U-004',
  dept: '商家服務二部',
  team: '退刷科',
  role: '操作員',
  name: '黃O芳',
  email: 'huan****@example.com',
  enabled: false,
  changed: '2026/04/29'
}, {
  id: 'U-005',
  dept: '商家服務二部',
  team: '退刷科',
  role: '操作員',
  name: '李O寬',
  email: 'lee*****@example.com',
  enabled: true,
  changed: '2026/04/22'
}, {
  id: 'U-006',
  dept: '商家服務二部',
  team: '爭議處理科',
  role: '審核員',
  name: '張O雯',
  email: 'chan****@example.com',
  enabled: true,
  changed: '2026/04/20'
}];
function Accounts() {
  const [country, setCountry] = useStateAcc(new Set(['台灣']));
  const [page, setPage] = useStateAcc(1);
  const [rows, setRows] = useStateAcc(ROWS);
  const [dept, setDept] = useStateAcc('');
  const [team, setTeam] = useStateAcc('');
  const [role, setRole] = useStateAcc('');
  const [name, setName] = useStateAcc('');
  function toggleCountry(c) {
    const next = new Set(country);
    if (c === '全選') {
      if (next.size === COUNTRIES.length - 1) next.clear();else COUNTRIES.slice(1).forEach(x => next.add(x));
    } else {
      next.has(c) ? next.delete(c) : next.add(c);
    }
    setCountry(next);
  }
  function toggleRow(id) {
    setRows(rows.map(r => r.id === id ? {
      ...r,
      enabled: !r.enabled
    } : r));
  }
  const allSelected = country.size === COUNTRIES.length - 1;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    crumbs: [{
      label: '首頁',
      href: '#/'
    }, {
      label: '管理設定'
    }, {
      label: '人員權限'
    }],
    title: "\u4EBA\u54E1\u6B0A\u9650",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "filled-outline",
      color: "brand",
      icon: "arrow-down-to-bracket"
    }, "\u532F\u51FA Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "filled",
      color: "brand",
      icon: "plus"
    }, "\u65B0\u589E\u5E33\u865F"))
  }), /*#__PURE__*/React.createElement(Section, {
    title: "\u67E5\u8A62\u689D\u4EF6"
  }, /*#__PURE__*/React.createElement(FilterBar, {
    collapsedCount: 3,
    onReset: () => {
      setDept('');
      setTeam('');
      setRole('');
      setName('');
    },
    fields: [{
      label: '部門',
      node: /*#__PURE__*/React.createElement(Select, {
        value: dept,
        onChange: setDept,
        placeholder: "\u5168\u90E8\u90E8\u9580",
        options: [{
          value: '',
          label: '全部部門'
        }, {
          value: '商家服務一部',
          label: '商家服務一部'
        }, {
          value: '商家服務二部',
          label: '商家服務二部'
        }]
      })
    }, {
      label: '科室',
      node: /*#__PURE__*/React.createElement(Select, {
        value: team,
        onChange: setTeam,
        placeholder: "\u5168\u90E8\u79D1\u5BA4",
        options: [{
          value: '',
          label: '全部科室'
        }, {
          value: '收單科',
          label: '收單科'
        }, {
          value: '對帳科',
          label: '對帳科'
        }, {
          value: '退刷科',
          label: '退刷科'
        }, {
          value: '爭議處理科',
          label: '爭議處理科'
        }]
      })
    }, {
      label: '角色',
      node: /*#__PURE__*/React.createElement(Select, {
        value: role,
        onChange: setRole,
        placeholder: "\u5168\u90E8\u89D2\u8272",
        options: [{
          value: '',
          label: '全部角色'
        }, {
          value: '管理員',
          label: '管理員'
        }, {
          value: '審核員',
          label: '審核員'
        }, {
          value: '操作員',
          label: '操作員'
        }]
      })
    }, {
      label: '姓名',
      node: /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "cub-input-outline",
        placeholder: "\u8F38\u5165\u59D3\u540D",
        value: name,
        onChange: e => setName(e.target.value)
      })
    }]
  }, /*#__PURE__*/React.createElement("div", {
    className: "mp-chip-rail",
    style: {
      marginBottom: 'var(--component-margin-s)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "\u570B\u5BB6"), /*#__PURE__*/React.createElement("div", {
    className: "cub-selectable-chip-group"
  }, /*#__PURE__*/React.createElement(Chip, {
    selected: allSelected,
    onClick: () => toggleCountry('全選')
  }, "\u5168\u9078"), COUNTRIES.slice(1).map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    selected: country.has(c),
    onClick: () => toggleCountry(c)
  }, c)))))), /*#__PURE__*/React.createElement(Section, {
    title: "\u67E5\u8A62\u7D50\u679C",
    headerEnd: /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--font-body-s)',
        color: 'var(--text-neutral-secondary)'
      }
    }, "\u5171\u627E\u5230 ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--text-neutral-primary)'
      }
    }, rows.length), " \u7B46")
  }, /*#__PURE__*/React.createElement("table", {
    className: "cub-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "cub-column-selector"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement("th", null, "\u5E33\u865F\u7DE8\u865F"), /*#__PURE__*/React.createElement("th", null, "\u90E8\u9580"), /*#__PURE__*/React.createElement("th", null, "\u79D1\u5BA4"), /*#__PURE__*/React.createElement("th", null, "\u89D2\u8272"), /*#__PURE__*/React.createElement("th", null, "\u59D3\u540D"), /*#__PURE__*/React.createElement("th", null, "\u96FB\u5B50\u90F5\u4EF6"), /*#__PURE__*/React.createElement("th", null, "\u7570\u52D5\u65E5"), /*#__PURE__*/React.createElement("th", null, "\u555F\u7528"), /*#__PURE__*/React.createElement("th", {
    className: "cub-column-actions"
  }, "\u52D5\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "cub-column-selector"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement("td", {
    className: "mp-num"
  }, r.id), /*#__PURE__*/React.createElement("td", null, r.dept), /*#__PURE__*/React.createElement("td", null, r.team), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Tag, {
    status: r.role === '管理員' ? 'closed' : r.role === '審核員' ? 'progress' : 'draft'
  }, r.role)), /*#__PURE__*/React.createElement("td", null, r.name), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--text-neutral-secondary)'
    }
  }, r.email), /*#__PURE__*/React.createElement("td", null, r.changed), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Switch, {
    checked: r.enabled,
    onChange: () => toggleRow(r.id)
  })), /*#__PURE__*/React.createElement("td", {
    className: "cub-column-actions"
  }, /*#__PURE__*/React.createElement(TextButton, null, "\u7570\u52D5")))))), /*#__PURE__*/React.createElement(Paginator, {
    page: page,
    pageSize: 20,
    total: rows.length,
    onChange: setPage
  })));
}
Object.assign(window, {
  Accounts
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant-portal/accounts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant-portal/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, ReactDOM, Header, Sidebar, Footer, Dashboard, Transactions, Settlement, Refund, Accounts, Section, Button, Icon, PageHead */
const {
  useState,
  useEffect
} = React;
function NowPicker({
  ip
}) {
  // Renders "2024/11/24(四) 10:10:10" — frozen mock value matching the spec SVG.
  return null;
}
function App() {
  const [route, setRoute] = useState(() => location.hash.replace('#/', '') || 'dashboard');
  const [selectedTx, setSelectedTx] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  useEffect(() => {
    function onHash() {
      setRoute(location.hash.replace('#/', '') || 'dashboard');
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  function navigate(r) {
    location.hash = '#/' + (r === 'dashboard' ? '' : r);
    setRoute(r);
  }
  const merchant = {
    name: '味屋日式食堂 大安店',
    id: 'M01234'
  };
  const user = {
    name: '林小可',
    role: 'Owner'
  };
  function EmptyPage({
    title,
    subtitle,
    crumbs
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      crumbs: crumbs,
      title: title,
      subtitle: subtitle
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--component-margin-m)',
        padding: 'var(--size-15) var(--component-padding-xl)',
        color: 'var(--text-neutral-secondary)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/illustrations/fix.svg",
      alt: "",
      style: {
        width: 160
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--font-body-m)'
      }
    }, "\u6B64\u9801\u9762\u6B63\u5728\u5EFA\u7F6E\u4E2D\u3002\u8ACB\u5F9E\u5DE6\u5074\u9078\u64C7\u5176\u4ED6\u9805\u76EE\uFF0C\u6216\u56DE\u5230\u5DE5\u4F5C\u53F0\u3002"), /*#__PURE__*/React.createElement(Button, {
      variant: "filled",
      color: "brand",
      icon: "house",
      onClick: () => navigate('dashboard')
    }, "\u56DE\u5230\u5DE5\u4F5C\u53F0"))));
  }
  let pageEl;
  if (route === 'dashboard') {
    pageEl = /*#__PURE__*/React.createElement(Dashboard, {
      onNavigate: navigate
    });
  } else if (route === 'transactions') {
    pageEl = /*#__PURE__*/React.createElement(Transactions, {
      onOpenDetail: t => {
        setSelectedTx(t);
        navigate('settlement');
      }
    });
  } else if (route === 'settlement') {
    pageEl = /*#__PURE__*/React.createElement(Settlement, {
      tx: selectedTx,
      onBack: () => navigate('transactions')
    });
  } else if (route === 'refund') {
    pageEl = /*#__PURE__*/React.createElement(Refund, {
      onBack: () => navigate('transactions')
    });
  } else if (route === 'accounts') {
    pageEl = /*#__PURE__*/React.createElement(Accounts, null);
  } else {
    const map = {
      tasks: {
        crumbs: [{
          label: '首頁',
          href: '#/'
        }, {
          label: '工作台'
        }, {
          label: '我的待辦'
        }],
        title: '我的待辦'
      },
      dispute: {
        crumbs: [{
          label: '首頁',
          href: '#/'
        }, {
          label: '交易與帳務'
        }, {
          label: '爭議交易'
        }],
        title: '爭議交易'
      },
      statement: {
        crumbs: [{
          label: '首頁',
          href: '#/'
        }, {
          label: '交易與帳務'
        }, {
          label: '對帳單'
        }],
        title: '對帳單'
      },
      stores: {
        crumbs: [{
          label: '首頁',
          href: '#/'
        }, {
          label: '管理設定'
        }, {
          label: '門市管理'
        }],
        title: '門市管理'
      },
      terminals: {
        crumbs: [{
          label: '首頁',
          href: '#/'
        }, {
          label: '管理設定'
        }, {
          label: '終端機'
        }],
        title: '終端機'
      },
      system: {
        crumbs: [{
          label: '首頁',
          href: '#/'
        }, {
          label: '管理設定'
        }, {
          label: '系統設定'
        }],
        title: '系統設定'
      },
      support: {
        crumbs: [{
          label: '首頁',
          href: '#/'
        }, {
          label: '聯絡客服'
        }],
        title: '聯絡客服'
      }
    };
    const info = map[route] || {
      crumbs: [{
        label: '首頁',
        href: '#/'
      }],
      title: '頁面'
    };
    pageEl = /*#__PURE__*/React.createElement(EmptyPage, _extends({}, info, {
      subtitle: "\u5C1A\u672A\u5EFA\u7F6E"
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "mp-app",
    "data-collapsed": sidebarCollapsed,
    "data-screen-label": `MerchantPortal/${route}`
  }, /*#__PURE__*/React.createElement(Header, {
    user: user,
    ip: "88.8.123.123",
    datetime: "2026/05/19(\u4E00) 14:23:08",
    sidebarCollapsed: sidebarCollapsed,
    onToggleSidebar: () => setSidebarCollapsed(c => !c)
  }), /*#__PURE__*/React.createElement(Sidebar, {
    route: route,
    onNavigate: navigate,
    collapsed: sidebarCollapsed,
    merchant: merchant
  }), /*#__PURE__*/React.createElement("main", {
    className: "mp-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mp-page"
  }, pageEl), /*#__PURE__*/React.createElement(Footer, null)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant-portal/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant-portal/components.jsx
try { (() => {
/* global React */
const {
  useState
} = React;

/* ============================================================================
   Shared atoms — template-aligned. ALL visual styles come from cub-components.css
   or app.css. This file only assembles them into easy React components.
   ========================================================================== */

function Icon({
  name,
  className = '',
  style,
  title
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `cub-icon-${name} ${className}`,
    style: style,
    title: title
  });
}

/* Tooltip — dark hint bubble on hover, using the canonical .cub-tooltip visual */
function Tooltip({
  text,
  placement = 'up',
  children
}) {
  // arrow points AT the anchor: tooltip ABOVE → arrow-down
  const arrow = placement === 'up' ? 'cub-tooltip-arrow-down' : 'cub-tooltip-arrow-up';
  return /*#__PURE__*/React.createElement("span", {
    className: "cub-tooltip-trigger",
    tabIndex: 0
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "cub-tooltip",
    role: "tooltip"
  }, text, /*#__PURE__*/React.createElement("span", {
    className: `cub-tooltip-arrow ${arrow}`
  })));
}

/* ──────────────── Money — NT$ formatter with null handling ──────────────── */
function Money({
  value
}) {
  if (value == null) return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-neutral-third)'
    }
  }, "\u2014\u2014");
  const isNeg = value < 0;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      color: isNeg ? 'var(--text-error-main)' : 'var(--text-neutral-primary)'
    }
  }, isNeg ? '−' : '', "NT$", Math.abs(value).toLocaleString());
}

/* ──────────────── Buttons ──────────────── */
function Button({
  variant = 'filled',
  color = 'brand',
  size,
  block,
  icon,
  iconRight,
  children,
  onClick,
  disabled,
  type = 'button',
  className
}) {
  const classes = ['cub-button-base', 'cub-button', `cub-button-${variant}`, `cub-${color}`];
  if (size === 'small') classes.push('cub-button-small');
  if (block) classes.push('cub-button-block');
  if (disabled) classes.push('cub-disabled');
  if (className) classes.push(className);
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    className: classes.join(' '),
    onClick: onClick,
    disabled: disabled
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-button-wrapper"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "cub-button-prefix"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "cub-button-content"
  }, children), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "cub-button-suffix"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: iconRight
  }))));
}
function TextButton({
  icon,
  iconRight,
  children,
  onClick,
  color = 'brand',
  size
}) {
  const classes = ['cub-button-base', 'cub-button', 'cub-button-text', `cub-${color}`];
  if (size === 'small') classes.push('cub-button-small');
  return /*#__PURE__*/React.createElement("button", {
    className: classes.join(' '),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-button-wrapper"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "cub-button-prefix"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "cub-button-content"
  }, children), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "cub-button-suffix"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: iconRight
  }))));
}

/* ──────────────── Hyperlink — cub-hyperlink ──────────────── */
function Hyperlink({
  href = '#',
  color = 'brand',
  small,
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: `cub-hyperlink cub-${color}${small ? ' cub-hyperlink-small' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-hyperlink-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-hyperlink-content"
  }, children)));
}

/* ──────────────── Page head — breadcrumb + h1 + toolbar ──────────────── */
function Breadcrumb({
  items
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "cub-breadcrumb",
    "aria-label": "breadcrumb"
  }, /*#__PURE__*/React.createElement("ul", null, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("li", {
    className: "cub-breadcrumb-indicator"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-caret-right-filled"
  })), /*#__PURE__*/React.createElement("li", {
    className: "cub-breadcrumb-item"
  }, i < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    href: it.href || '#',
    onClick: e => {
      if (!it.href) e.preventDefault();
      it.onClick?.();
    }
  }, it.label) : it.label)))));
}
function PageHead({
  crumbs,
  title,
  subtitle,
  actions,
  end,
  back
}) {
  return /*#__PURE__*/React.createElement("div", null, crumbs && /*#__PURE__*/React.createElement(Breadcrumb, {
    items: crumbs
  }), /*#__PURE__*/React.createElement("div", {
    className: "cub-page-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-page-header-title"
  }, back && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u8FD4\u56DE",
    onClick: back,
    className: "cub-button-base cub-button cub-button-icon cub-neutral cub-page-back"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-button-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-arrow-left"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cub-page-header-heading"
  }, /*#__PURE__*/React.createElement("h1", null, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "cub-page-header-sub"
  }, subtitle))), end && /*#__PURE__*/React.createElement("div", null, end), actions && /*#__PURE__*/React.createElement("div", {
    className: "cub-page-header-actions"
  }, actions)));
}

/* ──────────────── Section (cub-card with header + body) ──────────────── */
function Section({
  title,
  headerEnd,
  children,
  flush,
  padding,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cub-card"
  }, (title || headerEnd) && /*#__PURE__*/React.createElement("div", {
    className: `cub-card-header-content${dark ? ' cub-card-header-dark' : ''}`
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "cub-card-header-title"
  }, title), headerEnd && /*#__PURE__*/React.createElement("div", {
    className: "cub-card-header-end"
  }, headerEnd)), /*#__PURE__*/React.createElement("div", {
    className: "cub-card-content",
    style: {
      ...(flush ? {
        padding: 0
      } : null),
      ...(padding ? {
        padding
      } : null)
    }
  }, children));
}

/* ──────────────── Tags — 4 standard statuses + error, using cub-tag-* ──────────────── */
const TAG_PRESETS = {
  draft: {
    cls: 'cub-tag-gray',
    label: '草稿'
  },
  progress: {
    cls: 'cub-tag-blue',
    label: '處理中'
  },
  review: {
    cls: 'cub-tag-orange',
    label: '審核中'
  },
  closed: {
    cls: 'cub-tag-green',
    label: '結案'
  },
  error: {
    cls: 'cub-tag-red',
    label: '失敗'
  },
  success: {
    cls: 'cub-tag-green',
    label: '成功'
  }
};
function Tag({
  status,
  small,
  children
}) {
  const preset = TAG_PRESETS[status] || TAG_PRESETS.draft;
  return /*#__PURE__*/React.createElement("span", {
    className: `cub-tag ${preset.cls}${small ? ' cub-tag-small' : ''}`
  }, children || preset.label);
}

/* ──────────────── Detail field — uses cub-content-field ──────────────── */
function DetailField({
  label,
  value,
  mono,
  amount,
  empty
}) {
  let valCls = '';
  if (mono) valCls += ' mono';
  if (amount) valCls += ' amount';
  const isEmpty = empty || value == null || value === '';
  return /*#__PURE__*/React.createElement("div", {
    className: "cub-content-field"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-label-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-label-appended"
  }, /*#__PURE__*/React.createElement("label", {
    className: "cub-label"
  }, /*#__PURE__*/React.createElement("span", null, label)))), /*#__PURE__*/React.createElement("div", {
    className: `cub-content-field-content${valCls}`
  }, isEmpty ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-neutral-third)'
    }
  }, "\u2014") : value));
}

/* ──────────────── Form field (editable — form pages) ──────────────── */
function FormField({
  label,
  required,
  hint,
  error,
  horizontal,
  children
}) {
  const invalid = !!error;
  return /*#__PURE__*/React.createElement("div", {
    className: `cub-form-field${horizontal ? ' cub-form-field-horizontal' : ''}${invalid ? ' cub-form-field-invalid' : ''}`
  }, label && /*#__PURE__*/React.createElement("div", {
    className: "cub-label-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-label-appended"
  }, /*#__PURE__*/React.createElement("label", {
    className: "cub-label"
  }, /*#__PURE__*/React.createElement("span", null, label), required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")))), /*#__PURE__*/React.createElement("div", {
    className: "cub-form-field-container"
  }, children, (error || hint) && /*#__PURE__*/React.createElement("div", {
    className: "cub-form-field-subscript-container"
  }, error ? /*#__PURE__*/React.createElement("div", {
    className: "cub-error-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-form-field-error"
  }, error)) : /*#__PURE__*/React.createElement("div", {
    className: "cub-hint-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-form-field-hint"
  }, hint)))));
}

/* ──────────────── Paginator — uses cub-paginator ──────────────── */
function Paginator({
  page,
  pageSize,
  total,
  onChange,
  onPageSize
}) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const win = [];
  const start = Math.max(1, Math.min(page - 2, pages - 4));
  for (let i = start; i <= Math.min(pages, start + 4); i++) win.push(i);
  return /*#__PURE__*/React.createElement("div", {
    className: "cub-paginator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-paginator-left-container"
  }, /*#__PURE__*/React.createElement("span", null, "\u5171 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-neutral-primary)'
    }
  }, total.toLocaleString()), " \u7B46"), /*#__PURE__*/React.createElement("span", {
    className: "cub-paginator-select"
  }, "\u6BCF\u9801", /*#__PURE__*/React.createElement("select", {
    className: "cub-select cub-paginator-page-size",
    style: {
      width: 'auto'
    },
    value: pageSize,
    onChange: e => onPageSize?.(parseInt(e.target.value))
  }, /*#__PURE__*/React.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/React.createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/React.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/React.createElement("option", {
    value: "100"
  }, "100")), "\u7B46")), /*#__PURE__*/React.createElement("div", {
    className: "cub-paginator-pages-container"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "cub-paginator-pages"
  }, /*#__PURE__*/React.createElement("li", {
    className: "cub-paginator-link"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(Math.max(1, page - 1)),
    disabled: page <= 1
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-chevron-left"
  }))), win.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    className: `cub-paginator-page${p === page ? ' cub-selected' : ''}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onChange(p);
    }
  }, p))), /*#__PURE__*/React.createElement("li", {
    className: "cub-paginator-link"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(Math.min(pages, page + 1)),
    disabled: page >= pages
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-chevron-right"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "cub-paginator-right-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-paginator-quick-jumper"
  }, "\u7B2C ", page, " / ", pages, " \u9801")));
}

/* ──────────────── Stepper — uses cub-stepper ──────────────── */
function Stepper({
  steps,
  active
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cub-stepper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-stepper-header"
  }, steps.map((s, i) => {
    const state = i < active ? 'cub-step-header-completed' : i === active ? 'cub-active' : '';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: `cub-step-header cub-stepper-link-vertical ${state}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "cub-stepper-link"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cub-step-icon"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cub-step-icon-wrapper"
    }, i < active ? /*#__PURE__*/React.createElement("span", {
      className: "cub-icon-check"
    }) : i + 1)), /*#__PURE__*/React.createElement("div", {
      className: "cub-stepper-label-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cub-stepper-label"
    }, s)))), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      className: "cub-stepper-line"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cub-stepper-line-bar"
    })));
  })));
}

/* ──────────────── Switch — uses cub-switch ──────────────── */
function Switch({
  checked,
  onChange,
  label,
  small
}) {
  const cls = `cub-switch${checked ? ' cub-checked' : ''}${small ? ' cub-switch-small' : ''}`;
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    onClick: () => onChange?.(!checked),
    role: "switch",
    "aria-checked": checked
  }, /*#__PURE__*/React.createElement("label", {
    className: "cub-switch-label cub-switch-label-after"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-switch-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-switch-thumb-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-switch-thumb"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-switch-uncheckedmark"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cub-switch-checkedmark"
  })))), label && /*#__PURE__*/React.createElement("span", {
    className: "cub-switch-label-content"
  }, label)));
}

/* ──────────────── Select — cub-select custom dropdown ──────────────── */
function Select({
  value,
  options,
  onChange,
  placeholder = '請選擇',
  small
}) {
  const [open, setOpen] = useState(false);
  const sel = options.find(o => String(o.value) === String(value));
  return /*#__PURE__*/React.createElement("div", {
    className: `cub-select cub-select-outline${small ? ' cub-select-small' : ''}${open ? ' cub-select-expanded' : ''}`,
    role: "combobox",
    "aria-expanded": open,
    onBlur: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-select-trigger",
    tabIndex: 0,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-select-value"
  }, sel ? /*#__PURE__*/React.createElement("span", {
    className: "cub-select-value-text"
  }, sel.label) : /*#__PURE__*/React.createElement("span", {
    className: "cub-select-placeholder"
  }, placeholder)), /*#__PURE__*/React.createElement("span", {
    className: "cub-select-arrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-chevron-down"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "cub-select-panel",
    onMouseDown: e => e.preventDefault()
  }, options.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.value,
    className: `cub-option${String(o.value) === String(value) ? ' cub-selected' : ''}`,
    onClick: () => {
      onChange?.(o.value);
      setOpen(false);
    }
  }, o.label))));
}

/* ──────────────── Chip — cub-selectable-chip ──────────────── */
function Chip({
  selected,
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `cub-selectable-chip${selected ? ' cub-selected' : ''}`,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-selectable-chip-button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-chip-prefix-icon cub-icon-check"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cub-selectable-chip-label"
  }, children)));
}

/* ──────────────── Checkbox / Radio — wrap cub-* primitives ──────────────── */
function Checkbox({
  checked,
  onChange,
  label,
  small,
  indeterminate
}) {
  let cls = `cub-checkbox-base cub-checkbox${checked ? ' cub-checked' : ''}${indeterminate ? ' cub-checkbox-indeterminate' : ''}${small ? ' cub-checkbox-small' : ''}`;
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, /*#__PURE__*/React.createElement("label", {
    className: `cub-checkbox-label${label ? '' : ' cub-checkbox-label-empty'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-checkbox-container"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "cub-checkbox-input",
    checked: !!checked,
    onChange: e => onChange?.(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "cub-checkbox-frame"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cub-checkbox-background"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-checkbox-checkmark"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cub-checkbox-mixedmark"
  }))), label && /*#__PURE__*/React.createElement("span", {
    className: "cub-checkbox-label-content"
  }, label)));
}
function Radio({
  checked,
  onChange,
  name,
  value,
  label,
  small
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `cub-radio${checked ? ' cub-radio-checked' : ''}${small ? ' cub-radio-small' : ''}`
  }, /*#__PURE__*/React.createElement("label", {
    className: `cub-radio-label${label ? '' : ' cub-radio-label-empty'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-radio-container"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    className: "cub-radio-input",
    name: name,
    value: value,
    checked: !!checked,
    onChange: () => onChange?.(value)
  }), /*#__PURE__*/React.createElement("span", {
    className: "cub-radio-circle-background"
  }, checked && /*#__PURE__*/React.createElement("span", {
    className: "cub-radio-circle-checked"
  }))), label && /*#__PURE__*/React.createElement("span", {
    className: "cub-radio-label-content"
  }, label)));
}

/* ──────────────── Upload (drag-drop area) — uses cub-upload ──────────────── */
function UploadArea({
  accept,
  hint,
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cub-upload"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-upload-area",
    onClick: () => onPick?.()
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-upload-area-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-upload-area-prompt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-cloud-arrow-up cub-upload-area-icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cub-upload-area-label"
  }, "\u9EDE\u64CA\u6216\u62D6\u66F3\u6A94\u6848\u4F86\u4E0A\u50B3")), hint && /*#__PURE__*/React.createElement("div", {
    className: "cub-upload-area-description"
  }, hint))));
}

/* ──────────────── FilterBar — query-condition block (cub-grid + expand/collapse) ────────────────
   fields: [{ label, node }]. Collapsed shows the first `collapsedCount` fields (one row,
   leaving the last grid cell for the actions). 展開 reveals the rest; 收合 折回一行. */
function FilterBar({
  fields,
  collapsedCount = 3,
  columns = 4,
  onReset,
  onSearch,
  children
}) {
  const [expanded, setExpanded] = useState(false);
  const canCollapse = fields.length > collapsedCount;
  const visible = expanded || !canCollapse ? fields : fields.slice(0, collapsedCount);
  return /*#__PURE__*/React.createElement(React.Fragment, null, children, /*#__PURE__*/React.createElement("div", {
    className: "mp-filter",
    style: {
      '--mp-filter-cols': columns
    }
  }, visible.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "field",
    key: i
  }, f.label && /*#__PURE__*/React.createElement("label", null, f.label), f.node)), /*#__PURE__*/React.createElement("div", {
    className: "mp-filter-actions"
  }, onReset && /*#__PURE__*/React.createElement(Button, {
    variant: "filled-outline",
    color: "neutral",
    onClick: onReset
  }, "\u91CD\u7F6E"), /*#__PURE__*/React.createElement(Button, {
    variant: "filled",
    color: "brand",
    onClick: onSearch
  }, "\u67E5\u8A62"), canCollapse && /*#__PURE__*/React.createElement(Button, {
    variant: "plain",
    color: "brand",
    iconRight: expanded ? 'chevron-up' : 'chevron-down',
    onClick: () => setExpanded(e => !e)
  }, expanded ? '收合' : '展開'))));
}
Object.assign(window, {
  Icon,
  Money,
  Button,
  TextButton,
  Tooltip,
  FilterBar,
  Hyperlink,
  Breadcrumb,
  PageHead,
  Section,
  Tag,
  DetailField,
  FormField,
  Paginator,
  Stepper,
  Switch,
  Chip,
  Select,
  Checkbox,
  Radio,
  UploadArea
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant-portal/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant-portal/dashboard.jsx
try { (() => {
/* global React, PageHead, Section, Tag, Button, TextButton, Icon, Money, Tooltip, Hyperlink */

/* ============================================================================
   Dashboard — workbench template (sources/templates/workbench.decoded.html)
   Layout: KPI strip → 案件處理 (table) → 快速入口 (tile grid) → 輔助說明 (help)
   ========================================================================== */

const TASKS = [{
  id: 'D2026-0518-03',
  subject: '退刷申請 待審核',
  amount: -1200,
  store: '大安店',
  submitted: '2026/05/19 12:18',
  status: 'review',
  label: '審核中'
}, {
  id: 'D2026-0518-02',
  subject: '撥款帳戶異動審查',
  amount: null,
  store: '——',
  submitted: '2026/05/18 17:42',
  status: 'progress',
  label: '處理中'
}, {
  id: 'D2026-0517-08',
  subject: '門市新增申請 信義店',
  amount: null,
  store: '信義店',
  submitted: '2026/05/17 10:21',
  status: 'review',
  label: '審核中'
}, {
  id: 'D2026-0516-12',
  subject: '爭議交易說明回覆',
  amount: -8500,
  store: '大安店',
  submitted: '2026/05/16 14:05',
  status: 'progress',
  label: '處理中'
}, {
  id: 'D2026-0515-09',
  subject: '月對帳簽收',
  amount: null,
  store: '全部',
  submitted: '2026/05/15 09:00',
  status: 'draft',
  label: '草稿'
}];
const QUICK_ITEMS = [{
  id: 'transactions',
  icon: 'magnifier',
  title: '交易查詢',
  hint: '依日期、卡別、店號查詢'
}, {
  id: 'settlement',
  icon: 'sack',
  title: '撥款查詢',
  hint: '查看每日撥款明細'
}, {
  id: 'refund',
  icon: 'arrow-rotate-left',
  title: '建立退刷',
  hint: '針對單筆交易退刷'
}, {
  id: 'statement',
  icon: 'file-line',
  title: '下載對帳單',
  hint: '匯出 PDF / Excel'
}, {
  id: 'stores',
  icon: 'shop',
  title: '新增門市',
  hint: '註冊門市與終端機'
}, {
  id: 'terminals',
  icon: 'mobile',
  title: '終端機列表',
  hint: 'POS / 行動收單管理'
}, {
  id: 'accounts',
  icon: 'user-shield',
  title: '人員權限',
  hint: '子帳號與角色設定'
}, {
  id: 'support',
  icon: 'messages',
  title: '聯絡客服',
  hint: '提交服務單或諮詢'
}];
const HELP = [{
  title: '文件範本',
  desc: '下載各類申請書、對帳格式、退刷表單等標準文件。',
  links: ['商戶申請書 (PDF)', '退刷申請書 (PDF)', '爭議交易回覆書 (PDF)', '月對帳格式 (Excel)']
}, {
  title: '操作手冊',
  desc: '系統操作說明、常見問題與線上影片教學。',
  links: ['商家服務平台 使用手冊', '交易查詢與下載', '退刷流程說明', '常見問題 FAQ']
}];
function Dashboard({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    crumbs: [{
      label: '首頁',
      href: '#/'
    }, {
      label: '工作台'
    }, {
      label: '首頁概覽'
    }],
    title: "\u9996\u9801\u6982\u89BD",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "filled-outline",
      color: "brand",
      icon: "arrow-down-to-bracket"
    }, "\u532F\u51FA Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "filled",
      color: "brand",
      icon: "plus"
    }, "\u65B0\u589E\u9580\u5E02"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "cub-grid cub-grid-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-card-content cub-statistic"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-label"
  }, "\u4ECA\u65E5\u4EA4\u6613\u7E3D\u984D ", /*#__PURE__*/React.createElement(Tooltip, {
    text: "\u7576\u65E5\u6210\u529F\u4EA4\u6613\u5408\u8A08\uFF0C\u4E0D\u542B\u9000\u5237\u3002"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info-circle"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-value cub-brand cub-tabular"
  }, "NT$1,234,567"), /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-trend cub-up"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-trend-up"
  }), "+8.4% \u8F03\u6628\u65E5"))), /*#__PURE__*/React.createElement("div", {
    className: "cub-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-card-content cub-statistic"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-label"
  }, "\u4ECA\u65E5\u4EA4\u6613\u7B46\u6578"), /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-value cub-tabular"
  }, "382"), /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-trend cub-up"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-trend-up"
  }), "+12 \u7B46"))), /*#__PURE__*/React.createElement("div", {
    className: "cub-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-card-content cub-statistic"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-label"
  }, "\u672C\u6708\u64A5\u6B3E"), /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-value cub-tabular"
  }, "NT$28.5M"), /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-trend cub-down"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-trend-down"
  }), "\u22122.1% \u8F03\u4E0A\u6708"))), /*#__PURE__*/React.createElement("div", {
    className: "cub-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-card-content cub-statistic"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-label"
  }, "\u5F85\u8655\u7406\u6848\u4EF6"), /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-value cub-tabular"
  }, "5"), /*#__PURE__*/React.createElement("div", {
    className: "cub-statistic-trend cub-down"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-trend-down"
  }), "\u22122 \u4EF6 \u8F03\u6628\u65E5")))), /*#__PURE__*/React.createElement(Section, {
    title: "\u6848\u4EF6\u8655\u7406",
    headerEnd: /*#__PURE__*/React.createElement(TextButton, {
      color: "brand",
      iconRight: "chevron-right",
      onClick: () => onNavigate?.('transactions')
    }, "\u67E5\u770B\u5168\u90E8")
  }, /*#__PURE__*/React.createElement("table", {
    className: "cub-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u9805\u76EE\u7DE8\u865F"), /*#__PURE__*/React.createElement("th", null, "\u4E3B\u65E8"), /*#__PURE__*/React.createElement("th", null, "\u95DC\u806F\u9580\u5E02"), /*#__PURE__*/React.createElement("th", {
    className: "cub-column-amount"
  }, "\u91D1\u984D"), /*#__PURE__*/React.createElement("th", null, "\u9001\u51FA\u6642\u9593"), /*#__PURE__*/React.createElement("th", null, "\u72C0\u614B"), /*#__PURE__*/React.createElement("th", {
    className: "cub-column-actions"
  }, "\u52D5\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, TASKS.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "cub-tabular"
  }, t.id), /*#__PURE__*/React.createElement("td", null, t.subject), /*#__PURE__*/React.createElement("td", null, t.store), /*#__PURE__*/React.createElement("td", {
    className: "cub-column-amount"
  }, /*#__PURE__*/React.createElement(Money, {
    value: t.amount
  })), /*#__PURE__*/React.createElement("td", null, t.submitted), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Tag, {
    status: t.status
  }, t.label)), /*#__PURE__*/React.createElement("td", {
    className: "cub-column-actions"
  }, /*#__PURE__*/React.createElement(TextButton, {
    onClick: () => onNavigate?.('settlement')
  }, "\u67E5\u770B"))))))), /*#__PURE__*/React.createElement(Section, {
    title: "\u5FEB\u901F\u5165\u53E3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-grid cub-grid-4"
  }, QUICK_ITEMS.map(q => /*#__PURE__*/React.createElement(Button, {
    key: q.id,
    variant: "filled-outline",
    color: "neutral",
    icon: q.icon,
    block: true,
    onClick: () => onNavigate?.(q.id)
  }, q.title)))), /*#__PURE__*/React.createElement(Section, {
    title: "\u8F14\u52A9\u8AAA\u660E"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-grid cub-grid-2"
  }, HELP.map(h => /*#__PURE__*/React.createElement("div", {
    className: "cub-card",
    key: h.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-card-content cub-card-content-dark cub-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-card-header-title"
  }, h.title), /*#__PURE__*/React.createElement("p", {
    className: "cub-card-text"
  }, h.desc), /*#__PURE__*/React.createElement("div", {
    className: "cub-stack cub-stack-s"
  }, h.links.map(l => /*#__PURE__*/React.createElement(Hyperlink, {
    key: l,
    small: true
  }, l)))))))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant-portal/dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant-portal/refund.jsx
try { (() => {
/* global React, PageHead, Section, Tag, Button, TextButton, Icon, FormField, Stepper, Radio, DetailField */
const {
  useState: useStateRefund
} = React;

/* ============================================================================
   Refund — form-1 template (basic one-column form)
   sources/templates/form-1.decoded.html

   Layout: PageHead → Section "退刷資料" — one-column form → footer action bar
   ========================================================================== */

function Refund({
  onBack
}) {
  const [reason, setReason] = useStateRefund('客戶要求');
  const [type, setType] = useStateRefund('full');
  const [contact, setContact] = useStateRefund('phone');
  const [memo, setMemo] = useStateRefund('');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    crumbs: [{
      label: '首頁',
      href: '#/'
    }, {
      label: '交易與帳務'
    }, {
      label: '建立退刷'
    }],
    title: "\u5EFA\u7ACB\u9000\u5237",
    back: onBack
  }), /*#__PURE__*/React.createElement(Section, {
    title: "\u9000\u5237\u5C0D\u8C61"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mp-detail-grid"
  }, /*#__PURE__*/React.createElement(DetailField, {
    label: "\u6388\u6B0A\u78BC",
    value: "A78231",
    mono: true
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u539F\u4EA4\u6613\u91D1\u984D",
    value: "NT$2,480",
    amount: true
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u539F\u4EA4\u6613\u6642\u9593",
    value: "2026/05/19 14:23:08"
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u5361\u5225 / \u672B\u56DB",
    value: "VISA **** 4221",
    mono: true
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u5E97\u865F / \u7D42\u7AEF\u6A5F",
    value: "M01234 / T-01",
    mono: true
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u539F\u72C0\u614B",
    value: /*#__PURE__*/React.createElement(Tag, {
      status: "closed"
    }, "\u7D50\u6848")
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "\u9000\u5237\u8CC7\u6599"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mp-form-grid cols-1"
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "\u9000\u5237\u985E\u578B",
    required: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-radio-group-horizontal"
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "type",
    value: "full",
    label: "\u5168\u984D\u9000\u5237 NT$2,480",
    checked: type === 'full',
    onChange: setType
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "type",
    value: "partial",
    label: "\u90E8\u5206\u9000\u5237",
    checked: type === 'partial',
    onChange: setType
  }))), type === 'partial' && /*#__PURE__*/React.createElement(FormField, {
    label: "\u9000\u5237\u91D1\u984D",
    required: true,
    hint: "\u4E0D\u53EF\u5927\u65BC\u539F\u4EA4\u6613\u91D1\u984D NT$2,480\u3002"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "cub-input-outline",
    placeholder: "\u8F38\u5165\u9000\u5237\u91D1\u984D"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "\u9000\u5237\u539F\u56E0",
    required: true
  }, /*#__PURE__*/React.createElement("select", {
    className: "cub-input-outline",
    value: reason,
    onChange: e => setReason(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "\u5BA2\u6236\u8981\u6C42"), /*#__PURE__*/React.createElement("option", null, "\u5546\u54C1\u7455\u75B5"), /*#__PURE__*/React.createElement("option", null, "\u91CD\u8907\u5165\u5E33"), /*#__PURE__*/React.createElement("option", null, "\u53D6\u6D88\u8A02\u55AE"), /*#__PURE__*/React.createElement("option", null, "\u5176\u4ED6"))), /*#__PURE__*/React.createElement(FormField, {
    label: "\u9000\u5237\u8AAA\u660E",
    hint: "\u82E5\u9000\u5237\u539F\u56E0\u70BA\u300C\u5176\u4ED6\u300D\uFF0C\u8ACB\u52D9\u5FC5\u586B\u5BEB\u3002"
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "cub-input-outline",
    rows: 4,
    placeholder: "\u8ACB\u8AAA\u660E\u9000\u5237\u60C5\u5883\uFF0C\u6700\u591A 500 \u5B57",
    value: memo,
    onChange: e => setMemo(e.target.value)
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "\u901A\u77E5\u65B9\u5F0F",
    required: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-radio-group-horizontal"
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "contact",
    value: "phone",
    label: "\u96FB\u8A71",
    checked: contact === 'phone',
    onChange: setContact
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "contact",
    value: "sms",
    label: "\u7C21\u8A0A",
    checked: contact === 'sms',
    onChange: setContact
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "contact",
    value: "email",
    label: "\u96FB\u5B50\u90F5\u4EF6",
    checked: contact === 'email',
    onChange: setContact
  }))), /*#__PURE__*/React.createElement(FormField, {
    label: "\u806F\u7D61\u8CC7\u8A0A",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "cub-input-outline",
    placeholder: contact === 'email' ? 'name@example.com' : '0912-345-678'
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "\u9810\u8A08\u8655\u7406\u65E5",
    hint: "\u5BE6\u969B\u8655\u7406\u6642\u9593\u4EE5\u6536\u55AE\u884C\u4F5C\u696D\u70BA\u6E96\u3002"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "cub-input-outline",
    defaultValue: "2026-05-20"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "cub-sticky-action-bar cub-sticky-action-bar-bottom"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    color: "neutral",
    onClick: onBack
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    variant: "filled-outline",
    color: "brand"
  }, "\u5132\u5B58\u8349\u7A3F"), /*#__PURE__*/React.createElement(Button, {
    variant: "filled",
    color: "brand",
    icon: "paper-plane"
  }, "\u9001\u51FA\u7533\u8ACB")));
}
Object.assign(window, {
  Refund
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant-portal/refund.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant-portal/settlement.jsx
try { (() => {
/* global React, PageHead, Section, Tag, Button, TextButton, Icon, DetailField */

/* ============================================================================
   Settlement — detail-1 template (advanced detail, read-only)
   sources/templates/detail-1.decoded.html

   Layout:
     PageHead (breadcrumb + title + 返回 + 列印 + 退刷)
     Section "基本資料" — 3-column DetailField grid
     Section "付款明細" flush — flow-table
     Section "檔案上傳" flush — file rows
     Section "傳遞流程" flush — flow-table (timeline)
     Sticky action bar
   ========================================================================== */

const FILES = [{
  name: '授權單.pdf',
  type: '交易文件',
  code: 'TX-AUTH-001',
  desc: '授權回條',
  user: '系統自動',
  when: '2026/05/19 14:23'
}, {
  name: '簽單影像.jpg',
  type: '交易文件',
  code: 'TX-SLIP-001',
  desc: '電子簽單影像',
  user: '系統自動',
  when: '2026/05/19 14:23'
}, {
  name: '退刷申請書.pdf',
  type: '退刷文件',
  code: 'RF-FORM-002',
  desc: '商戶填寫',
  user: '陳俊宏',
  when: '2026/05/19 16:42'
}];
const FLOW = [{
  stage: '1. 授權成功',
  unit: '收單系統',
  name: '系統',
  conclusion: '同意',
  opinion: '發卡行核可',
  time: '2026/05/19 14:23:08'
}, {
  stage: '2. 請款入帳',
  unit: '收單系統',
  name: '系統',
  conclusion: '同意',
  opinion: '當日批次請款',
  time: '2026/05/19 23:50:01'
}, {
  stage: '3. 清算完成',
  unit: '聯合信用卡中心',
  name: 'NCCC',
  conclusion: '同意',
  opinion: '結算金額已確認',
  time: '2026/05/20 03:12:44'
}, {
  stage: '4. 撥款排程',
  unit: '撥款處理科',
  name: '王小明',
  conclusion: '待辦',
  opinion: '預計撥入 *** 8842',
  time: '2026/05/22 (預定)'
}];
function Settlement({
  tx,
  onBack
}) {
  const t = tx || {
    time: '2026/05/19 14:23:08',
    auth: 'A78231',
    net: 'VISA',
    tail: '4221',
    store: 'M01234 / T-01',
    amount: 2480,
    status: 'closed',
    label: '結案'
  };
  const fee = Math.floor(Math.abs(t.amount) * 0.015);
  const credit = Math.abs(t.amount) - fee;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    crumbs: [{
      label: '首頁',
      href: '#/'
    }, {
      label: '交易查詢',
      href: '#/transactions',
      onClick: onBack
    }, {
      label: `授權碼 ${t.auth}`
    }],
    title: `授權碼 ${t.auth}`,
    back: onBack
  }), /*#__PURE__*/React.createElement(Section, {
    title: "\u57FA\u672C\u8CC7\u6599"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mp-detail-grid"
  }, /*#__PURE__*/React.createElement(DetailField, {
    label: "\u4EA4\u6613\u6642\u9593",
    value: t.time
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u4EA4\u6613\u985E\u578B",
    value: "\u5BE6\u9AD4\u5237\u5361 / \u4E00\u822C\u6D88\u8CBB"
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u5361\u5225",
    value: t.net
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u5361\u865F\u672B\u56DB",
    value: `**** ${t.tail}`,
    mono: true
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u6388\u6B0A\u78BC",
    value: t.auth,
    mono: true
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "RRN",
    value: "508110000023",
    mono: true
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u5E97\u865F (MID)",
    value: t.store.split(' / ')[0],
    mono: true
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u7D42\u7AEF\u6A5F (TID)",
    value: t.store.split(' / ')[1],
    mono: true
  }), /*#__PURE__*/React.createElement(DetailField, {
    label: "\u9810\u5B9A\u64A5\u6B3E\u65E5",
    value: "2026/05/22 (T+3)"
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "\u4ED8\u6B3E\u660E\u7D30"
  }, /*#__PURE__*/React.createElement("table", {
    className: "cub-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u9805\u76EE"), /*#__PURE__*/React.createElement("th", null, "\u985E\u578B"), /*#__PURE__*/React.createElement("th", null, "\u8AAA\u660E"), /*#__PURE__*/React.createElement("th", {
    className: "cub-column-amount"
  }, "\u91D1\u984D"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u4EA4\u6613\u91D1\u984D"), /*#__PURE__*/React.createElement("td", null, "\u542B\u7A05"), /*#__PURE__*/React.createElement("td", null, "\u6D88\u8CBB\u91D1\u984D"), /*#__PURE__*/React.createElement("td", {
    className: "cub-column-amount mp-num"
  }, "NT$", Math.abs(t.amount).toLocaleString())), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\u624B\u7E8C\u8CBB"), /*#__PURE__*/React.createElement("td", null, "\u2014"), /*#__PURE__*/React.createElement("td", null, "1.5% \u6536\u55AE\u624B\u7E8C\u8CBB"), /*#__PURE__*/React.createElement("td", {
    className: "cub-column-amount mp-num",
    style: {
      color: 'var(--text-error-main)'
    }
  }, "\u2212NT$", fee.toLocaleString())), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", null, "\u5BE6\u969B\u64A5\u6B3E")), /*#__PURE__*/React.createElement("td", null, "\u2014"), /*#__PURE__*/React.createElement("td", null, "\u64A5\u5165\u5E33\u6236 *** 8842"), /*#__PURE__*/React.createElement("td", {
    className: "cub-column-amount mp-num-strong",
    style: {
      color: 'var(--text-success-main)'
    }
  }, "NT$", credit.toLocaleString()))))), /*#__PURE__*/React.createElement(Section, {
    title: "\u6A94\u6848\u4E0A\u50B3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mp-file-list"
  }, FILES.map(f => /*#__PURE__*/React.createElement("div", {
    className: "mp-file-row",
    key: f.code
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico cub-icon-file-line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, f.name), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, f.type, " \xB7 ", f.code, " \xB7 ", f.desc, " \xB7 \u4E0A\u50B3\u8005\uFF1A", f.user, " \xB7 ", f.when)), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(TextButton, {
    size: "small",
    icon: "eye"
  }, "\u9810\u89BD"), /*#__PURE__*/React.createElement(TextButton, {
    size: "small",
    icon: "arrow-down-to-bracket"
  }, "\u4E0B\u8F09")))))), /*#__PURE__*/React.createElement(Section, {
    title: "\u50B3\u905E\u6D41\u7A0B"
  }, /*#__PURE__*/React.createElement("table", {
    className: "cub-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u968E\u6BB5"), /*#__PURE__*/React.createElement("th", null, "\u55AE\u4F4D"), /*#__PURE__*/React.createElement("th", null, "\u59D3\u540D"), /*#__PURE__*/React.createElement("th", null, "\u7D50\u8AD6"), /*#__PURE__*/React.createElement("th", null, "\u610F\u898B"), /*#__PURE__*/React.createElement("th", null, "\u6642\u9593"))), /*#__PURE__*/React.createElement("tbody", null, FLOW.map((s, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, s.stage), /*#__PURE__*/React.createElement("td", null, s.unit), /*#__PURE__*/React.createElement("td", null, s.name), /*#__PURE__*/React.createElement("td", null, s.conclusion === '同意' ? /*#__PURE__*/React.createElement(Tag, {
    status: "closed"
  }, "\u540C\u610F") : /*#__PURE__*/React.createElement(Tag, {
    status: "progress"
  }, s.conclusion)), /*#__PURE__*/React.createElement("td", null, s.opinion), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--text-neutral-secondary)'
    }
  }, s.time)))))), /*#__PURE__*/React.createElement("div", {
    className: "cub-sticky-action-bar cub-sticky-action-bar-bottom"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "filled-outline",
    color: "brand",
    icon: "print"
  }, "\u5217\u5370\u660E\u7D30"), t.amount > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "filled",
    color: "error",
    icon: "arrow-rotate-left"
  }, "\u5EFA\u7ACB\u9000\u5237")));
}
Object.assign(window, {
  Settlement
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant-portal/settlement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant-portal/shell.jsx
try { (() => {
/* global React */
const {
  useState: useStateShell
} = React;

/* ============================================================================
   Header — exact reproduction of the cub-header spec (1440×48)
   See preview/component-header.html and assets/cub-header-spec.svg
   ========================================================================== */
function Header({
  user,
  datetime,
  ip,
  onToggleSidebar,
  sidebarCollapsed,
  onSearch
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "cub-header mp-header",
    "data-screen-label": "Header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mp-header__left"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mp-header__hamburger",
    "aria-label": "\u5207\u63DB\u9078\u55AE",
    onClick: onToggleSidebar
  }, /*#__PURE__*/React.createElement("span", {
    className: `cub-icon-${sidebarCollapsed ? 'bars' : 'bars'}`
  })), /*#__PURE__*/React.createElement("div", {
    className: "cub-header-logo mp-header__logo",
    tabIndex: "0"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cub_logo_cathay_green.png",
    alt: "Cathay United Bank"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sys"
  }, "\u5546\u5BB6\u670D\u52D9\u5E73\u53F0"))), /*#__PURE__*/React.createElement("label", {
    className: "mp-header__search"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-magnifier"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "\u67E5\u8A62\u95DC\u9375\u5B57",
    onKeyDown: e => {
      if (e.key === 'Enter') onSearch?.(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mp-header__right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mp-header__meta"
  }, ip), /*#__PURE__*/React.createElement("span", {
    className: "mp-header__meta"
  }, datetime), /*#__PURE__*/React.createElement("div", {
    className: "mp-header__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mp-header__icon-btn",
    "aria-label": "\u8AAA\u660E",
    title: "\u8AAA\u660E"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-question-circle"
  })), /*#__PURE__*/React.createElement("button", {
    className: "mp-header__icon-btn",
    "aria-label": "\u901A\u77E5",
    title: "\u901A\u77E5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-bell"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mp-header__badge"
  }, "3")), /*#__PURE__*/React.createElement("button", {
    className: "mp-header__icon-btn",
    "aria-label": "\u8A2D\u5B9A",
    title: "\u8A2D\u5B9A"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-gear"
  })), /*#__PURE__*/React.createElement("button", {
    className: "mp-header__icon-btn",
    "aria-label": "\u5207\u63DB\u8A9E\u7CFB",
    title: "\u5207\u63DB\u8A9E\u7CFB"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-globe"
  })), /*#__PURE__*/React.createElement("button", {
    className: "mp-header__user"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-icon-user-circle"
  }), user.name))));
}

/* ============================================================================
   Sidebar — light, cub-collapsible-menu style with brand-7 active state
   ========================================================================== */
// Flat nav list — parents may carry `children` (accordion sub-items).
const NAV_ITEMS = [{
  id: 'dashboard',
  icon: 'house',
  label: '首頁概覽'
}, {
  id: 'tasks',
  icon: 'clipboard-list',
  label: '我的待辦',
  badge: 4
}, {
  id: 'transactions',
  icon: 'receipt',
  label: '交易查詢',
  children: [{
    id: 'transactions',
    label: '交易明細'
  }, {
    id: 'statement',
    label: '對帳單下載'
  }, {
    id: 'dispute',
    label: '爭議交易'
  }]
}, {
  id: 'settlement',
  icon: 'sack',
  label: '撥款查詢'
}, {
  id: 'refund',
  icon: 'arrow-rotate-left',
  label: '退刷管理'
}, {
  id: 'stores',
  icon: 'shop',
  label: '門市管理',
  children: [{
    id: 'stores',
    label: '門市列表'
  }, {
    id: 'terminals',
    label: '終端機'
  }]
}, {
  id: 'accounts',
  icon: 'user-shield',
  label: '人員權限'
}, {
  id: 'system',
  icon: 'gear',
  label: '系統設定'
}];
function Sidebar({
  route,
  onNavigate,
  collapsed
}) {
  // Which parents are expanded (accordion). Default: open the branch of the
  // current route so the active sub-item is visible.
  const [openIds, setOpenIds] = useStateShell(() => {
    const init = {};
    NAV_ITEMS.forEach(it => {
      if (it.children && it.children.some(c => c.id === route)) init[it.id] = true;
    });
    return init;
  });
  const toggleOpen = id => setOpenIds(o => ({
    ...o,
    [id]: !o[id]
  }));
  return /*#__PURE__*/React.createElement("aside", {
    className: "mp-sidebar"
  }, /*#__PURE__*/React.createElement("nav", {
    className: `cub-collapsible-menu${collapsed ? ' cub-collapsed' : ''}`,
    "aria-label": "\u4E3B\u5C0E\u89BD"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cub-collapsible-menu-list-group"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "cub-collapsible-menu-list"
  }, NAV_ITEMS.map(it => {
    const hasChildren = !!it.children;
    const isOpen = !!openIds[it.id];
    const childSelected = hasChildren && it.children.some(c => c.id === route);
    const isSelected = !hasChildren && route === it.id;
    return /*#__PURE__*/React.createElement("li", {
      key: it.id
    }, /*#__PURE__*/React.createElement("button", {
      className: `cub-collapsible-menu-item${isSelected ? ' cub-selected' : ''}${childSelected ? ' cub-parent-has-selected' : ''}`,
      onClick: () => hasChildren ? toggleOpen(it.id) : onNavigate(it.id),
      "aria-current": isSelected ? 'page' : undefined,
      "aria-expanded": hasChildren ? isOpen : undefined
    }, /*#__PURE__*/React.createElement("div", {
      className: "cub-collapsible-menu-item-wrapper"
    }, /*#__PURE__*/React.createElement("span", {
      className: `cub-collapsible-menu-item-icon cub-icon-${it.icon}`
    }), /*#__PURE__*/React.createElement("div", {
      className: "cub-collapsible-menu-item-content"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cub-collapsible-menu-item-text"
    }, it.label), it.badge && /*#__PURE__*/React.createElement("span", {
      className: "cub-collapsible-menu-count"
    }, it.badge), hasChildren && /*#__PURE__*/React.createElement("span", {
      className: `cub-icon-chevron-down cub-collapsible-menu-item-toggle${isOpen ? ' cub-expanded' : ''}`
    })))), hasChildren && !collapsed && isOpen && it.children.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: `cub-collapsible-menu-item cub-collapsible-menu-subitem${route === c.id ? ' cub-selected' : ''}`,
      onClick: () => onNavigate(c.id),
      "aria-current": route === c.id ? 'page' : undefined
    }, /*#__PURE__*/React.createElement("div", {
      className: "cub-collapsible-menu-item-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cub-collapsible-menu-item-content"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cub-collapsible-menu-item-text"
    }, c.label))))), collapsed && /*#__PURE__*/React.createElement("div", {
      className: "cub-collapsible-menu-flyout"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cub-nav-menu-panel",
      role: "menu"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cub-nav-menu-content"
    }, hasChildren ? it.children.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: `cub-nav-menu-item${route === c.id ? ' cub-selected' : ''}`,
      role: "menuitem",
      onClick: () => onNavigate(c.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "cub-nav-menu-item-content"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cub-nav-menu-item-content-text"
    }, c.label)))) : /*#__PURE__*/React.createElement("button", {
      className: `cub-nav-menu-item${route === it.id ? ' cub-selected' : ''}`,
      role: "menuitem",
      onClick: () => onNavigate(it.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "cub-nav-menu-item-content"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cub-nav-menu-item-content-text"
    }, it.label)))))));
  })))));
}

/* ============================================================================
   Footer — cub-footer copyright
   ========================================================================== */
function Footer({
  children = '© 國泰世華銀行'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "cub-footer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cub-footer-text"
  }, children));
}
Object.assign(window, {
  Header,
  Sidebar,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant-portal/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant-portal/transactions.jsx
try { (() => {
/* global React, PageHead, Section, Tag, Button, TextButton, Icon, Paginator, Money, Checkbox, Select, FilterBar */
const {
  useState: useStateTx
} = React;

/* ============================================================================
   Transactions — list-2 template (basic query list)
   sources/templates/list-2.decoded.html

   Layout:
     PageHead (breadcrumb + title + 匯出 + 進階查詢 + 新增)
     Section "查詢條件" — filter row (項目 / 狀態 / 起日 / 訖日)
     Section "查詢結果" flush — toolbar + datatable + paginator
   ========================================================================== */

const TX = [{
  time: '2026/05/19 14:23:08',
  auth: 'A78231',
  net: 'VISA',
  tail: '4221',
  store: 'M01234 / T-01',
  amount: 2480,
  status: 'closed',
  label: '結案'
}, {
  time: '2026/05/19 14:01:55',
  auth: 'A78230',
  net: 'JCB',
  tail: '0083',
  store: 'M01234 / T-01',
  amount: 15900,
  status: 'progress',
  label: '處理中'
}, {
  time: '2026/05/19 13:47:12',
  auth: 'A78229',
  net: 'Master',
  tail: '9911',
  store: 'M01234 / T-02',
  amount: 680,
  status: 'review',
  label: '審核中'
}, {
  time: '2026/05/19 12:55:01',
  auth: 'A78228',
  net: 'VISA',
  tail: '4221',
  store: 'M01234 / T-02',
  amount: 4280,
  status: 'closed',
  label: '結案'
}, {
  time: '2026/05/19 12:18:30',
  auth: 'A78212',
  net: 'VISA',
  tail: '0177',
  store: 'M01234 / T-01',
  amount: -1200,
  status: 'error',
  label: '已退款'
}, {
  time: '2026/05/19 11:42:08',
  auth: 'A78201',
  net: 'JCB',
  tail: '7733',
  store: 'M01234 / T-01',
  amount: 3250,
  status: 'closed',
  label: '結案'
}, {
  time: '2026/05/19 11:08:45',
  auth: 'A78198',
  net: 'Master',
  tail: '0044',
  store: 'M01234 / T-03',
  amount: 12480,
  status: 'closed',
  label: '結案'
}, {
  time: '2026/05/19 10:33:21',
  auth: 'A78185',
  net: 'AMEX',
  tail: '2200',
  store: 'M01234 / T-02',
  amount: 8500,
  status: 'closed',
  label: '結案'
}, {
  time: '2026/05/19 10:14:09',
  auth: 'A78180',
  net: 'VISA',
  tail: '5588',
  store: 'M01234 / T-01',
  amount: 980,
  status: 'closed',
  label: '結案'
}, {
  time: '2026/05/19 09:52:44',
  auth: 'A78177',
  net: 'JCB',
  tail: '6611',
  store: 'M01234 / T-02',
  amount: 22400,
  status: 'progress',
  label: '處理中'
}, {
  time: '2026/05/19 09:35:18',
  auth: 'A78170',
  net: 'Master',
  tail: '8800',
  store: 'M01234 / T-01',
  amount: 1750,
  status: 'closed',
  label: '結案'
}, {
  time: '2026/05/19 09:11:02',
  auth: 'A78165',
  net: 'VISA',
  tail: '4444',
  store: 'M01234 / T-03',
  amount: 5670,
  status: 'review',
  label: '審核中'
}];
function Transactions({
  onOpenDetail
}) {
  const [keyword, setKeyword] = useStateTx('');
  const [status, setStatus] = useStateTx('all');
  const [network, setNetwork] = useStateTx('all');
  const [from, setFrom] = useStateTx('2026-05-01');
  const [to, setTo] = useStateTx('2026-05-19');
  const [page, setPage] = useStateTx(1);
  const [pageSize, setPageSize] = useStateTx(20);
  const [selected, setSelected] = useStateTx(new Set());
  const filtered = TX.filter(t => (status === 'all' || t.status === status) && (network === 'all' || t.net === network) && (keyword === '' || t.auth.toLowerCase().includes(keyword.toLowerCase())));
  function toggle(auth) {
    const next = new Set(selected);
    next.has(auth) ? next.delete(auth) : next.add(auth);
    setSelected(next);
  }
  function toggleAll() {
    if (selected.size === filtered.length) setSelected(new Set());else setSelected(new Set(filtered.map(t => t.auth)));
  }
  const sum = filtered.reduce((s, t) => s + t.amount, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    crumbs: [{
      label: '首頁',
      href: '#/'
    }, {
      label: '交易與帳務'
    }, {
      label: '交易查詢'
    }],
    title: "\u4EA4\u6613\u67E5\u8A62",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "filled-outline",
      color: "neutral",
      icon: "arrow-down-to-bracket"
    }, "\u4E0B\u8F09 CSV"), /*#__PURE__*/React.createElement(Button, {
      variant: "filled-outline",
      color: "brand",
      icon: "arrow-down-to-bracket"
    }, "\u532F\u51FA Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "filled",
      color: "brand",
      icon: "magnifier"
    }, "\u9032\u968E\u67E5\u8A62"))
  }), /*#__PURE__*/React.createElement(Section, {
    title: "\u67E5\u8A62\u689D\u4EF6"
  }, /*#__PURE__*/React.createElement(FilterBar, {
    collapsedCount: 3,
    onReset: () => {
      setKeyword('');
      setStatus('all');
      setNetwork('all');
      setFrom('2026-05-01');
      setTo('2026-05-19');
    },
    fields: [{
      label: '授權碼 / 訂單編號',
      node: /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "cub-input-outline",
        placeholder: "\u8F38\u5165\u95DC\u9375\u5B57",
        value: keyword,
        onChange: e => setKeyword(e.target.value)
      })
    }, {
      label: '狀態',
      node: /*#__PURE__*/React.createElement(Select, {
        value: status,
        onChange: setStatus,
        options: [{
          value: 'all',
          label: '全部狀態'
        }, {
          value: 'draft',
          label: '草稿'
        }, {
          value: 'progress',
          label: '處理中'
        }, {
          value: 'review',
          label: '審核中'
        }, {
          value: 'closed',
          label: '結案'
        }, {
          value: 'error',
          label: '已退款'
        }]
      })
    }, {
      label: '卡別',
      node: /*#__PURE__*/React.createElement(Select, {
        value: network,
        onChange: setNetwork,
        options: [{
          value: 'all',
          label: '全部卡別'
        }, {
          value: 'VISA',
          label: 'VISA'
        }, {
          value: 'Master',
          label: 'Master'
        }, {
          value: 'JCB',
          label: 'JCB'
        }, {
          value: 'AMEX',
          label: 'AMEX'
        }]
      })
    }, {
      label: '起日',
      node: /*#__PURE__*/React.createElement("input", {
        type: "date",
        className: "cub-input-outline",
        value: from,
        onChange: e => setFrom(e.target.value)
      })
    }, {
      label: '訖日',
      node: /*#__PURE__*/React.createElement("input", {
        type: "date",
        className: "cub-input-outline",
        value: to,
        onChange: e => setTo(e.target.value)
      })
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    title: "\u67E5\u8A62\u7D50\u679C"
  }, /*#__PURE__*/React.createElement("table", {
    className: "cub-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "cub-column-selector"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: selected.size === filtered.length && filtered.length > 0,
    indeterminate: selected.size > 0 && selected.size < filtered.length,
    onChange: toggleAll
  })), /*#__PURE__*/React.createElement("th", null, "\u4EA4\u6613\u6642\u9593"), /*#__PURE__*/React.createElement("th", null, "\u6388\u6B0A\u78BC"), /*#__PURE__*/React.createElement("th", null, "\u5361\u5225"), /*#__PURE__*/React.createElement("th", null, "\u5361\u865F\u672B\u56DB"), /*#__PURE__*/React.createElement("th", null, "\u5E97\u865F / \u7D42\u7AEF\u6A5F"), /*#__PURE__*/React.createElement("th", {
    className: "cub-column-amount"
  }, "\u91D1\u984D"), /*#__PURE__*/React.createElement("th", null, "\u72C0\u614B"), /*#__PURE__*/React.createElement("th", {
    className: "cub-column-actions"
  }, "\u52D5\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.auth
  }, /*#__PURE__*/React.createElement("td", {
    className: "cub-column-selector"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: selected.has(t.auth),
    onChange: () => toggle(t.auth)
  })), /*#__PURE__*/React.createElement("td", null, t.time), /*#__PURE__*/React.createElement("td", {
    className: "mp-num"
  }, t.auth), /*#__PURE__*/React.createElement("td", null, t.net), /*#__PURE__*/React.createElement("td", {
    className: "mp-num"
  }, "**** ", t.tail), /*#__PURE__*/React.createElement("td", null, t.store), /*#__PURE__*/React.createElement("td", {
    className: "cub-column-amount"
  }, /*#__PURE__*/React.createElement(Money, {
    value: t.amount
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Tag, {
    status: t.status
  }, t.label)), /*#__PURE__*/React.createElement("td", {
    className: "cub-column-actions"
  }, /*#__PURE__*/React.createElement(TextButton, {
    onClick: () => onOpenDetail?.(t)
  }, "\u67E5\u770B")))))), /*#__PURE__*/React.createElement(Paginator, {
    page: page,
    pageSize: pageSize,
    total: 482,
    onChange: setPage,
    onPageSize: setPageSize
  })));
}
Object.assign(window, {
  Transactions
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant-portal/transactions.jsx", error: String((e && e.message) || e) }); }

})();
