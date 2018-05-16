import React, {Component} from 'react';
import { render } from 'react-dom';
export default class Header extends Component {
    render(){
        return (
          <div className="content-wrapper">
            <section className="content-header">
                <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li className="active">Dashboard</li>
                </ol>
            </section>
            <section className="content">
            <div className="row">
            <div className="col-lg-3 col-xs-6">
                        <div className="small-box bg-aqua">
                            <div className="inner">
                                <h3>150</h3>
                                <p>New Orders</p>
                            </div>
                            <div className="icon">
                                <i className="fa fa-shopping-bag"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xs-6">
                        <div className="small-box bg-green">
                            <div className="inner">
                                <h3>53<sup>%</sup></h3>
                                <p>Bounce Rate</p>
                            </div>
                            <div className="icon">
                                <i className="fa fa-bar-chart"></i>        
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xs-6">
                        <div className="small-box bg-yellow">
                            <div className="inner">
                                <h3>44</h3>
                                <p>User Registrations</p>
                            </div>
                            <div className="icon">
                                <i class="fa fa-user"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xs-6">
                        <div className="small-box bg-red">
                            <div className="inner">
                                <h3>65</h3>
                                <p>Unique Visitors</p>
                            </div>
                            <div className="icon">
                                <i className="fa fa-pie-chart"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
            </div>
            <div className="row">
            <section className="col-lg-7 connectedSortable">
            <div className="nav-tabs-custom">
            <ul className="nav nav-tabs pull-right ui-sortable-handle">
            <li className="active"><a href="#revenue-chart" data-toggle="tab">Area</a></li>
            <li><a href="#sales-chart" data-toggle="tab">Donut</a></li>
            <li className="pull-left header"><i className="fa fa-inbox"></i> Sales</li>
            </ul>
            <div className="tab-content no-padding">
            
            
            <div className="chart tab-pane active" id="revenue-chart">
                                <i className="fa fa-area-chart"></i>        




            </div>
            </div>
            
            </div>
             <div className="box box-success">
                            <div className="box-header">
                                <i className="fa fa-comments-o"></i>
                                <h3 className="box-title">Chat</h3>
                                <div className="box-tools pull-right" data-toggle="tooltip" title="Status">
                                    <div className="btn-group" data-toggle="btn-toggle">
                                        <button type="button" className="btn btn-default btn-sm active"><i className="fa fa-square text-green"></i>
                                        </button>
                                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-square text-red"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body chat" id="chat-box">
                                <div className="item">
                                    <img src="/img/user4-128x128.jpg" alt="user image" className="online"></img>
                                    <p className="message">
                                        <a href="#" className="name">
                    <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 2:15</small>
                    Mike Doe
                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market
                                    </p>
                                    <div className="attachment">
                                        <h4>Attachments:</h4>
                                        <p className="filename">
                                            Theme-thumbnail-image.jpg
                                        </p>
                                        <div className="pull-right">
                                            <button type="button" className="btn btn-primary btn-sm btn-flat">Open</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="/img/user3-128x128.jpg" alt="user image" className="offline"></img>
                                    <p className="message">
                                        <a href="#" className="name">
                    <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 5:15</small>
                    Alexander Pierce
                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market
                                    </p>
                                </div>
                                <div className="item">
                                    <img src="/img/user2-160x160.jpg" alt="user image" className="offline"></img>
                                    <p className="message">
                                        <a href="#" className="name">
                    <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 5:30</small>
                    Susan Doe
                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market
                                    </p>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Type message..." />
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-success"><i className="fa fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

            <div class="box box-primary">
                            <div class="box-header ui-sortable-handle">
                                <i class="fa fa-clipboard"></i>
                                <h3 class="box-title">To Do List</h3>
                                <div class="box-tools pull-right">
                                    <ul class="pagination pagination-sm inline">
                                        <li><a href="#">«</a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">»</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="box-body">
                                <ul class="todo-list ui-sortable">
                                    <li>
                                        <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                                        <input type="checkbox" value="" />
                                        <span class="text">Design a nice theme</span>
                                        <small class="label label-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
                                        
                                    </li>
                                    <li>
                                        <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                                        <input type="checkbox" value="" />
                                        <span class="text">Make the theme responsive</span>
                                        <small class="label label-info"><i class="fa fa-clock-o"></i> 4 hours</small>
                                        
                                    </li>
                                    <li>
                                        <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                                        <input type="checkbox" value="" />
                                        <span class="text">Let theme shine like a star</span>
                                        <small class="label label-warning"><i class="fa fa-clock-o"></i> 1 day</small>
                                        
                                    </li>
                                    <li>
                                        <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                                        <input type="checkbox" value="" />
                                        <span class="text">Let theme shine like a star</span>
                                        <small class="label label-success"><i class="fa fa-clock-o"></i> 3 days</small>
                                        
                                    </li>
                                    <li>
                                        <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                                        <input type="checkbox" value="" />
                                        <span class="text">Check your messages and notifications</span>
                                        <small class="label label-primary"><i class="fa fa-clock-o"></i> 1 week</small>
                                        
                                    </li>
                                    <li>
                                        <span class="handle ui-sortable-handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
                                        <input type="checkbox" value="" />
                                        <span class="text">Let theme shine like a star</span>
                                        <small class="label label-default"><i class="fa fa-clock-o"></i> 1 month</small>
                                        
                                    </li>
                                </ul>
                            </div>
                            <div class="box-footer clearfix no-border">
                                <button type="button" class="btn btn-default pull-right"><i class="fa fa-plus"></i> Add item</button>
                            </div>

                            
                        </div>
                                                    <div class="box box-info">
                            <div class="box-header">
                                <i class="fa fa-envelope"></i>
                                <h3 class="box-title">Quick Email</h3>
                                <div class="pull-right box-tools">
                                    <button type="button" class="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove">
                                        <i class="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div class="box-body">
                                <form action="#" method="post">
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="emailto" placeholder="Email to:" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subject" placeholder="Subject" />
                                    </div>
                                    <div>
                                        <textarea class="textarea" placeholder="Message"></textarea>
                                    </div>



                                </form>
                            </div>
                            <div class="box-footer clearfix">
                                <button type="button" class="pull-right btn btn-default" id="sendEmail">Send
                                    <i class="fa fa-arrow-circle-right"></i></button>
                            </div>
                        </div>
            </section>
            <section class="col-lg-5 connectedSortable">
                        <div class="box box-solid bg-light-blue-gradient">
                            <div class="box-header">
                                <div class="pull-right box-tools">
                                    <button type="button" class="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range">
                                        <i class="fa fa-calendar"></i></button>
                                    <button type="button" class="btn btn-primary btn-sm pull-right" data-widget="collapse" data-toggle="tooltip" title="Collapse" style={{marginRight: '5'}}>
                                        <i class="fa fa-minus"></i></button>
                                </div>
                                <i class="fa fa-map-marker"></i>
                                <h3 class="box-title">
                Visitors
              </h3>
                            </div>
                            <div class="box-body">
                                <div id="world-map" style={{height: '250px',  width:'100%'}}>
                                <i class="fa fa-globe"></i>

                                </div>
                            </div>
                            <div class="box-footer no-border">
                                <div class="row">
                                    <div class="col-xs-4 text-center" style={{borderRight: '1px solid #f4f4f4'}}>
                                        <div id="sparkline-1"></div>
                                        <div class="knob-label">Visitors</div>
                                    </div>
                                    <div class="col-xs-4 text-center" style={{borderRight: '1px solid #f4f4f4'}}>
                                        <div id="sparkline-2"></div>
                                        <div class="knob-label">Online</div>
                                    </div>
                                    <div class="col-xs-4 text-center">
                                        <div id="sparkline-3"></div>
                                        <div class="knob-label">Exists</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box box-solid bg-teal-gradient">
                            <div class="box-header">
                                <i class="fa fa-th"></i>
                                <h3 class="box-title">Sales Graph</h3>
                                <div class="box-tools pull-right">
                                    <button type="button" class="btn bg-teal btn-sm" data-widget="collapse"><i class="fa fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn bg-teal btn-sm" data-widget="remove"><i class="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="box-body border-radius-none">
                                <div class="chart" id="line-chart" style={{height: '250px'}}>
                                <i class="fa fa-line-chart"></i>

                                </div>
                            </div>
                            <div class="box-footer no-border">
                                <div class="row">
                                    <div class="col-xs-4 text-center" style={{borderRight: '1px solid #f4f4f4'}}>
                                        <input type="text" class="knob" data-readonly="true" value="20" data-width="60" data-height="60" data-fgColor="#39CCCC" />
                                        <div class="knob-label">Mail-Orders</div>
                                    </div>
                                    <div class="col-xs-4 text-center" style={{borderRight: '1px solid #f4f4f4'}}>
                                        <input type="text" class="knob" data-readonly="true" value="50" data-width="60" data-height="60" data-fgColor="#39CCCC" />
                                        <div class="knob-label">Online</div>
                                    </div>
                                    <div class="col-xs-4 text-center">
                                        <input type="text" class="knob" data-readonly="true" value="30" data-width="60" data-height="60" data-fgColor="#39CCCC" />
                                        <div class="knob-label">In-Store</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box box-solid bg-green-gradient">
                            <div class="box-header">
                                <i class="fa fa-calendar"></i>
                                <h3 class="box-title">Calendar</h3>
                                <div class="pull-right box-tools">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                                            <i class="fa fa-bars"></i></button>
                                        <ul class="dropdown-menu pull-right" role="menu">
                                            <li><a href="#">Add new event</a></li>
                                            <li><a href="#">Clear events</a></li>
                                            <li class="divider"></li>
                                            <li><a href="#">View calendar</a></li>
                                        </ul>
                                    </div>
                                    <button type="button" class="btn btn-success btn-sm" data-widget="collapse"><i class="fa fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-success btn-sm" data-widget="remove"><i class="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="box-body no-padding">
                                <div id="calendar" style={{width: '100%'}}>
                                <i class="fa  fa-calendar"></i>

                                </div>
                            </div>
                            <div class="box-footer text-black">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="clearfix">
                                            <span class="pull-left">Task #1</span>
                                            <small class="pull-right">90%</small>
                                        </div>
                                        <div class="progress xs">
                                            <div class="progress-bar progress-bar-green" style={{width: '90%'}}></div>
                                        </div>
                                        <div class="clearfix">
                                            <span class="pull-left">Task #2</span>
                                            <small class="pull-right">70%</small>
                                        </div>
                                        <div class="progress xs">
                                            <div class="progress-bar progress-bar-green" style={{width: '70%'}}></div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="clearfix">
                                            <span class="pull-left">Task #3</span>
                                            <small class="pull-right">60%</small>
                                        </div>
                                        <div class="progress xs">
                                            <div class="progress-bar progress-bar-green" style={{width: '60%'}}></div>
                                        </div>
                                        <div class="clearfix">
                                            <span class="pull-left">Task #4</span>
                                            <small class="pull-right">40%</small>
                                        </div>
                                        <div class="progress xs">
                                            <div class="progress-bar progress-bar-green" style={{width: '40%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
            

            </section>
            <footer class="main-footer">
            <div class="pull-right hidden-xs">
                <b>Version</b> 2.4.0
            </div>
            <strong>Copyright © 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights reserved.
        </footer>
            

                



            </div>

            
        
        )
    }
}