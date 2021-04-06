<template>
  <div class="project-details">
    <a-row>
      <a-col :span="24">
        <a-breadcrumb class="page--title">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><router-link to="/projects"
              >Projects</router-link
            ></a-breadcrumb-item
          >
          <a-breadcrumb-item> Project 1</a-breadcrumb-item>
        </a-breadcrumb>
      </a-col>
    </a-row>

    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        marginBottom: '15px',
      }"
    >
      <a-row>
        <a-col :span="12">
          <div class="info-block">
            <div class="info-block__icon">
              <a-icon type="user" />
            </div>
            <div class="info-block__info">
              <h5>Project 1</h5>
              <a
                href="mailto:masud.ncse@gmail.com"
                class="text-black-50 d-block"
                >masud.ncse@gmail.com</a
              >
              <a href="tel:01676717945" class="text-black-50 d-block"
                >01676717945</a
              >
              <a
                href="http://google.com"
                target="_blank"
                class="text-black-50 d-block"
                >google.com</a
              >
            </div>
          </div>
        </a-col>
        <a-col :span="12" align="end">
          <a-button
            type="primary"
            icon="plus"
            @click="$router.push('/projects/add')"
            >Add Project</a-button
          >
          <div class="mb-2"></div>
          <a-button @click="$router.push('/projects/1/edit')">Edit</a-button>
          <a-button class="ml-2">Send Email</a-button>
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1"> Delete Project </a-menu-item>
              <a-menu-item key="2"> Duplicate </a-menu-item>
              <a-menu-item key="3"> Create Purchase Order </a-menu-item>
            </a-menu>
            <a-button class="ml-2"> More <a-icon type="down" /> </a-button>
          </a-dropdown>
          <a-button-group class="ml-2">
            <a-button>
              <a-icon type="left" />
            </a-button>
            <a-button>
              <a-icon type="right" />
            </a-button>
          </a-button-group>
        </a-col>
      </a-row>
    </a-layout-content>

    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        marginBottom: '15px',
      }"
    >
      <a-menu v-model="current" mode="horizontal status-menu" class="border-0">
        <a-menu-item key="details"> Details </a-menu-item>
        <a-menu-item key="updates"> Updated </a-menu-item>
        <a-menu-item key="project-tasks">
          <router-link to="/project-tasks">
            <a-tooltip>
              <template slot="title"> Project Tasks </template>
              <a-badge :count="99" :overflow-count="9">
                <i class="fa fa-tasks" :style="{ fontSize: '26px' }"></i>
              </a-badge>
            </a-tooltip>
          </router-link>
        </a-menu-item>
        <a-menu-item key="comments">
          <router-link to="/project-comments">
            <a-tooltip>
              <template slot="title"> Comments </template>
              <a-badge :count="1254" :overflow-count="9">
                <i class="fa fa-comments" :style="{ fontSize: '26px' }"></i>
              </a-badge>
            </a-tooltip>
          </router-link>
        </a-menu-item>
        <a-menu-item key="email">
          <router-link to="/project-documents">
            <a-tooltip>
              <template slot="title"> Documents </template>
              <a-badge :count="5" :overflow-count="9">
                <i class="fa fa-file" :style="{ fontSize: '26px' }"></i>
              </a-badge>
            </a-tooltip>
          </router-link>
        </a-menu-item>
        <a-menu-item key="products">
          <router-link to="/inquiries">
            <a-tooltip>
              <template slot="title"> Inquiries </template>
              <a-badge :count="99" :overflow-count="9">
                <i
                  class="fa fa-question-circle"
                  :style="{ fontSize: '26px' }"
                ></i>
              </a-badge>
            </a-tooltip>
          </router-link>
        </a-menu-item>
        <a-menu-item key="quotes">
          <router-link to="/quotes">
            <a-tooltip>
              <template slot="title"> Quotes </template>
              <a-badge :count="1254" :overflow-count="9">
                <i
                  class="fa fa-shopping-basket"
                  :style="{ fontSize: '26px' }"
                ></i>
              </a-badge>
            </a-tooltip>
          </router-link>
        </a-menu-item>
        <a-menu-item key="sales-order">
          <router-link to="/sales-order">
            <a-tooltip>
              <template slot="title"> Sales Order </template>
              <a-badge :count="5" :overflow-count="9">
                <i
                  class="fa fa-shopping-basket"
                  :style="{ fontSize: '26px' }"
                ></i>
              </a-badge>
            </a-tooltip>
          </router-link>
        </a-menu-item>
        <a-menu-item key="invoices">
          <router-link to="/invoices">
            <a-tooltip>
              <template slot="title"> Invoices </template>
              <a-badge :count="5" :overflow-count="9">
                <i
                  class="fa fa-shopping-basket"
                  :style="{ fontSize: '26px' }"
                ></i>
              </a-badge>
            </a-tooltip>
          </router-link>
        </a-menu-item>
        <a-menu-item key="contacts">
          <router-link to="/contacts">
            <a-tooltip>
              <template slot="title"> Contacts </template>
              <a-badge :count="5" :overflow-count="9">
                <i class="fa fa-user" :style="{ fontSize: '26px' }"></i>
              </a-badge>
            </a-tooltip>
          </router-link>
        </a-menu-item>
        <a-menu-item key="organizations">
          <router-link to="/organizations">
            <a-tooltip>
              <template slot="title"> Organizations </template>
              <a-badge :count="5" :overflow-count="9">
                <i class="fa fa-building-o" :style="{ fontSize: '26px' }"></i>
              </a-badge>
            </a-tooltip>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-content>

    <a-row :gutter="16">
      <a-col :span="12" class="mb-3">
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
          }"
        >
          <h6 class="d-flex justify-content-between">
            <span>Documents</span>
            <a-button icon="plus">Add New</a-button>
          </h6>
          <table class="table table-condensed mb-0">
            <thead>
              <tr>
                <td>Title</td>
                <td>File Name</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Document 1</td>
                <td>testdocument.jpg</td>
                <td>
                  <i class="fa fa-download"></i>
                </td>
              </tr>
              <tr>
                <td>Document 2</td>
                <td>testdocument.jpg</td>
                <td>
                  <i class="fa fa-download"></i>
                </td>
              </tr>
              <tr>
                <td>Document 3</td>
                <td>testdocument.jpg</td>
                <td>
                  <i class="fa fa-download"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </a-layout-content>
      </a-col>
      <a-col :span="12" class="mb-3">
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
          }"
        >
          <h6>Comments</h6>
          <div align="right">
            <a-textarea class="mb-2"></a-textarea>
            <a-button type="primary" icon="plus">Save</a-button>
          </div>
          <hr />
          <h6>Recent Comments</h6>
          <a-comment>
            <template slot="actions">
              <span key="comment-basic-reply-to">Reply to</span>
            </template>
            <a slot="author">Han Solo</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
            <p slot="content">
              We supply a series of design principles, practical patterns and
              high quality design resource.
            </p>
            <a-tooltip slot="datetime" title="sdfsdf">
              <span>12 Jan, 2020</span>
            </a-tooltip>
          </a-comment>
        </a-layout-content>
      </a-col>
      <a-col :span="24" class="mb-3">
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
          }"
        >
          <h5 class="d-flex justify-content-between">
            <span>Tasks</span>
            <a-button icon="plus">Add New</a-button>
          </h5>
          <table class="table table-condensed mb-0">
            <thead>
              <tr>
                <td>Title</td>
                <td>Progress</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem ipsum dolor sit.</td>
                <td>
                  95%
                  <a-dropdown :trigger="['click']" class="ml-2">
                    <a
                      class="ant-dropdown-link"
                      @click="(e) => e.preventDefault()"
                    >
                      <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                      <a-menu-item>
                        <a href="javascript:;">20%</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">50%</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">100%</a>
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </td>
                <td>
                  Completed
                  <a-dropdown :trigger="['click']" class="ml-2">
                    <a
                      class="ant-dropdown-link"
                      @click="(e) => e.preventDefault()"
                    >
                      <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                      <a-menu-item>
                        <a href="javascript:;">Completed</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">In Progress</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">Delivered</a>
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                <td>
                  95%
                  <a-dropdown :trigger="['click']" class="ml-2">
                    <a
                      class="ant-dropdown-link"
                      @click="(e) => e.preventDefault()"
                    >
                      <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                      <a-menu-item>
                        <a href="javascript:;">20%</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">50%</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">100%</a>
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </td>
                <td>
                  Completed
                  <a-dropdown :trigger="['click']" class="ml-2">
                    <a
                      class="ant-dropdown-link"
                      @click="(e) => e.preventDefault()"
                    >
                      <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                      <a-menu-item>
                        <a href="javascript:;">Completed</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">In Progress</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">Delivered</a>
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet consectetur.</td>
                <td>
                  95%
                  <a-dropdown :trigger="['click']" class="ml-2">
                    <a
                      class="ant-dropdown-link"
                      @click="(e) => e.preventDefault()"
                    >
                      <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                      <a-menu-item>
                        <a href="javascript:;">20%</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">50%</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">100%</a>
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </td>
                <td>
                  Completed
                  <a-dropdown :trigger="['click']" class="ml-2">
                    <a
                      class="ant-dropdown-link"
                      @click="(e) => e.preventDefault()"
                    >
                      <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                      <a-menu-item>
                        <a href="javascript:;">Completed</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">In Progress</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">Delivered</a>
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </a-layout-content>
      </a-col>
    </a-row>

    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        minHeight: '280px',
      }"
    >
      <a-form :form="form" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
        <a-card title="Basic Information">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item label="Project Name" labelAlign="left" class="mb-1">
                Project 1
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Start Date" labelAlign="left" class="mb-1">
                12 May, 2021
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Assigned To" labelAlign="left" class="mb-0">
                User 1
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Target End Date"
                labelAlign="left"
                class="mb-0"
              >
                25 Jul, 2022
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Status " labelAlign="left" class="mb-0">
                In Progress
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="Custom Information">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item
                label="Target Budget "
                labelAlign="left"
                class="mb-1"
              >
                50,00,000
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Priority" labelAlign="left" class="mb-1">
                High
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Progress" labelAlign="left" class="mb-1">
                20%
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="Description Details">
          <a-row :gutter="15">
            <a-col :span="24">
              <a-form-item
                label="Description"
                :label-col="{ span: 3 }"
                :wrapper-col="{ span: 18 }"
                class="mb-0"
                labelAlign="left"
              >
                <p class="mb-0" style="line-height: 1rem">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  voluptas nostrum commodi ullam aperiam non architecto illum
                  consequuntur facilis reiciendis! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Accusamus sed expedita
                  temporibus laboriosam quaerat eligendi blanditiis odio impedit
                  ducimus? Aliquam nemo ad repellat illo deserunt, atque, quod
                  perferendis magnam necessitatibus similique cum? Eveniet,
                  aliquam non. Voluptates repellat ullam ut illo iusto nam
                  laborum, commodi recusandae minima impedit saepe aut. Aperiam!
                </p>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
      </a-form>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ["details"],
      id: this.$route.params.id,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      routes: [
        {
          path: "index",
          breadcrumbName: "Home",
        },
        {
          path: "first",
          breadcrumbName: "Projects",
        },
        {
          path: "second",
          breadcrumbName: "Md. Masudul Kabir",
        },
      ],
    };
  },
  methods: {},
};
</script>